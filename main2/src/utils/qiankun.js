import { loadMicroApp } from 'qiankun'
import config from '../config'

const { subApps } = config

export function loadApp() {
  try {
    loadMicroApp(subApps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
}
