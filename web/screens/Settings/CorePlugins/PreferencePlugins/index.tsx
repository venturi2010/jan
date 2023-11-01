import React from 'react'

type Props = {
  pluginName: string
  preferenceValues: any
  preferenceItems: any
}

import { formatPluginsName } from '@utils/converter'

const PreferencePlugins = (props: Props) => {
  const { pluginName, preferenceValues, preferenceItems } = props

  return (
    <div>
      <h6 className="mb-6 text-sm font-semibold capitalize">
        {formatPluginsName(pluginName)}
      </h6>

      {preferenceItems
        .filter((x: any) => x.pluginName === pluginName)
        ?.map((e: any) => (
          <div key={e.preferenceKey} className="mb-4 flex flex-col">
            <div className="space-y-2">
              <span className="">Setting:</span>
              <span className="">{e.preferenceName}</span>
            </div>
            <span className="mt-1 text-muted-foreground">
              {e.preferenceDescription}
            </span>
            <div className="mt-2 flex flex-row items-center space-x-4">
              <input
                className="block w-full rounded-md border-0 bg-background/80 py-1.5 text-xs shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent/50 sm:leading-6"
                defaultValue={
                  preferenceValues.filter(
                    (v: any) => v.key === e.preferenceKey
                  )[0]?.value
                }
                onChange={(event) => {}}
              ></input>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PreferencePlugins