/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'
import { Grid } from '@lightningjs/ui'
import GridList from './GridList'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      w: 1920,
      h: 1080,
      color: 0xffffb703,
      rect: true,
      Title: {
        x: 1920 / 2,
        y: 50,
        mountX: 0.5,
        text: {
          text: 'Video Thumbnail Preview',
          fontFace: 'Regular',
          fontSize: 60,
          fontStyle: '',
          textColor: 0xff023047,
        },
      },
      Wrapper: {
        x: 100,
        y: 130,
        w: 1920,
        h: 1080,
        clipping: true,
        Grid: {
          x: 50,
          y: 80,
          // x: 150,
          // y: 200,
          type: Grid,
          columns: 3,
          itemType: GridList,
          w: 1920,
          h: 670,
          spacing: 30,
          scroll: {
            forward: 400
          },
        }
      }

    }

  }

  _init() {
    this.tag('Grid').add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => {
      return { item }
    }))
  }

  _getFocused() {
    return this.tag('Grid')
  }
}
