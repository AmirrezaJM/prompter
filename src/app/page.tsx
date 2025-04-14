import PromptForm from "@/components/prompt-form"

export default function Home() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col items-center">
          <PromptForm />
        </div>
      </div>
    </div>
  )
}
