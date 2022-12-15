import { Lightning, Log, Registry, VideoPlayer } from "@lightningjs/sdk";

export default class GridList extends Lightning.Component {
    static _template() {
        return {
            w: this.width,
            h: this.height,
            color: 0xff023047,
            rect: true,
            Border: {
                alpha: 0,
                y: -2,
                x: -2,
                zIndex: 2,
                texture: Lightning.Tools.getRoundRect(this.width, this.height, 4, 3, 0xff219ebc, false),
            },
        }
    }

    static get width() {
        return 480
    }

    static get height() {
        return 270
    }

    async _startVideo(left, top) {
        VideoPlayer.close()
        VideoPlayer.consumer(this)
        VideoPlayer.mute()
        VideoPlayer.position(top, left)
        VideoPlayer.size((480 * 1.15), (270 * 1.15))
        document.getElementById('video-player').style.zIndex = 2
        VideoPlayer.open('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
        Log.info('Video playing')
    }

    _hideBackground() {
        this.visible = false
    }

    _showBackground() {
        this.visible = true
    }

    $videoPlayerPlaying() {
        this._hideBackground()
    }

    _focus() {
        this.scale = 1.15
        this.zIndex = 2
        this.tag('Border').alpha = 1
        this.timeout = Registry.setTimeout(() => {
            const [x, y, right, top, N, bottom, left, N1] = this.core.getCornerPoints()
            this._startVideo(left, top)
        }, 2000)
    }

    _unfocus() {
        this.timeout && Registry.clearTimeout(this.timeout)
        this.scale = 1
        this.zIndex = 1
        this.tag('Border').alpha = 0
        this._showBackground()
        VideoPlayer.close()
    }
}