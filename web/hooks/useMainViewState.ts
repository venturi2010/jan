import { atom, useAtom } from 'jotai'

import { MainViewState } from '@/constants/screens'

const currentMainViewState = atom<MainViewState>(MainViewState.Welcome)

export function useMainViewState() {
  const [mainViewState, setMainViewState] = useAtom(currentMainViewState)
  const viewStateName = MainViewState[mainViewState]
  return { mainViewState, setMainViewState, viewStateName }
}
