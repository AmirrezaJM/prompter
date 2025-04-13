import { getFavoritePrompt, getPrompt } from "@/app/actions/actionPrompt";
import { PromptItem } from "./Prompt-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default async function PromptList() {
  const { prompts, error } = await getPrompt();
  const { favoritePrompts } = await getFavoritePrompt();
  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <>
      <div className="flex flex-col w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4">
        <div className="pb-4">
          <h2 className="text-[#0e141b] dark:text-white text-2xl sm:text-3xl font-bold text-center md:text-left">
            Prompts
          </h2>
        </div>
        <div className="w-full py-4 text-center">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center md:justify-start">
              <TabsList className="bg-slate-100 dark:bg-[#1f1f1f]">
                <TabsTrigger value="all">All Prompts</TabsTrigger>
                <TabsTrigger value="favorite">Favorite Prompt</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all">
              {prompts?.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">No prompts found.</p>
              ) : (
                <div>
                  {prompts?.map((prompt) => (
                    <PromptItem
                      key={prompt.id}
                      id={prompt.id}
                      title={prompt.title}
                      description={prompt.description}
                      mood={prompt.mood}
                      favorite={prompt.isFavorite}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="favorite">
              {favoritePrompts?.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
                  No favorite Prompts found.
                </p>
              ) : (
                <div>
                  {favoritePrompts?.map((favPrompt) => (
                    <PromptItem
                      key={favPrompt.id}
                      id={favPrompt.id}
                      title={favPrompt.title}
                      description={favPrompt.description}
                      mood={favPrompt.mood}
                      favorite={favPrompt.isFavorite}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
