import useCreateConversation from '@hooks/useCreateConversation'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import {
  MainViewState,
  setMainViewStateAtom,
} from '@helpers/atoms/MainView.atom'
import { activeAssistantModelAtom } from '@helpers/atoms/Model.atom'
import { useGetDownloadedModels } from '@hooks/useGetDownloadedModels'
import { Button } from '@uikit'
import { MessageCircle } from 'lucide-react'

enum ActionButton {
  DownloadModel = 'Download a Model',
  StartChat = 'Start a Conversation',
}

const SidebarEmptyHistory: React.FC = () => {
  const { downloadedModels } = useGetDownloadedModels()
  const activeModel = useAtomValue(activeAssistantModelAtom)
  const setMainView = useSetAtom(setMainViewStateAtom)
  const { requestCreateConvo } = useCreateConversation()
  const [action, setAction] = useState(ActionButton.DownloadModel)

  useEffect(() => {
    if (downloadedModels.length > 0) {
      setAction(ActionButton.StartChat)
    } else {
      setAction(ActionButton.DownloadModel)
    }
  }, [downloadedModels])

  const onClick = async () => {
    if (action === ActionButton.DownloadModel) {
      setMainView(MainViewState.ExploreModel)
    } else {
      if (!activeModel) {
        setMainView(MainViewState.ConversationEmptyModel)
      } else {
        await requestCreateConvo(activeModel)
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-3 py-10">
      <MessageCircle size={32} />
      <div className="flex flex-col items-center gap-y-2">
        <h6 className="text-center text-base">No Chat History</h6>
        <p className="mb-6 text-center text-muted-foreground">
          Get started by creating a new chat.
        </p>
        <Button onClick={onClick} themes="accent">
          {action}
        </Button>
      </div>
    </div>
  )
}

export default SidebarEmptyHistory