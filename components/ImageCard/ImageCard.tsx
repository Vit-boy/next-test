import * as React from 'react'

type IIe =
    | { browser: string; version: string }
    | { browser?: undefined; version?: undefined }

export interface ImageProps {
    src?: string
    alt?: string
    title?: string
    level?: number
    isIE?: IIe
}

class ImageCard extends React.Component<ImageProps, any> {
    static defaultProps = {
        src: '/image.png',
        alt: 'Outfit Photo',
        title: '',
    }

    constructor(props: ImageProps) {
        super(props)
        this.state = {
            textRef: React.createRef(),
            showTextMore: false,
        }
    }

    // componentDidMount() {
    //     const match = window.matchMedia('(max-width: 1024px)')
    //     const checkWidth = (e: any) => {
    //         if (
    //             this.props.isIE &&
    //             this.props.isIE.browser === 'IE' &&
    //             this.props.title
    //         ) {
    //             if (e.matches) {
    //                 this.isTextMore()
    //             } else {
    //                 this.isTextMore()
    //             }
    //         }
    //     }
    //     checkWidth(match)
    //     match.addListener(checkWidth)

    //     if (this.props.title) {
    //         this.isTextMore()
    //     }
    // }

    // isTextMore() {
    //     setTimeout(() => {
    //         const id = this.state.textRef.current
    //         if (id) {
    //             const clientHeight = id.clientHeight
    //             const scrollHeight = id.scrollHeight
    //             let showTextMore = clientHeight < scrollHeight
    //             if (this.props.isIE && this.props.isIE.browser === 'IE') {
    //                 let h = 4 * 34
    //                 if (document.body.clientWidth <= 1024) {
    //                     h = 4 * 24
    //                 }
    //                 if (h >= scrollHeight) {
    //                     showTextMore = false
    //                 } else {
    //                     showTextMore = true
    //                 }
    //             }
    //             this.setState({
    //                 showTextMore: showTextMore,
    //             })
    //         }
    //     }, 100)
    // }

    // handleKeyword = (str: string) => {
    //     let param = ''
    //     if (str) {
    //         const data = str.search('#')
    //         if (data !== -1) {
    //             param = str
    //         } else {
    //             param = `#${str}`
    //         }
    //     }
    //     return param
    // }

    // onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     e.currentTarget.classList.add('hover')
    // }
    // onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    //     const target = e.currentTarget
    //     setTimeout(() => {
    //         target.classList.remove('hover')
    //     }, 200)
    // }

    render() {
        const { src, title = '', level = 2, isIE } = this.props
        const { textRef, showTextMore } = this.state
        return (
            <div className={'outfit-card'}>
                {src && <div className={'img'} />}
                <div
                    className={`cover ${title ? 'tag-cover' : ''}`}
                    // onTouchStart={this.onTouchStart}
                    // onMouseEnter={this.onMouseEnter}
                >
                    {title ? (
                        <div
                            className={`text-container ${
                                isIE && isIE.browser === 'IE' && showTextMore
                                    ? 'text-ie'
                                    : 'text-notie'
                            }`}
                        >
                            <div className={'text-box'}>
                                {level === 2 && (
                                    <h2
                                        className={'title font-medium-sp'}
                                        ref={textRef}
                                    >
                                        {title}
                                        {/* {this.handleKeyword(title)} */}
                                    </h2>
                                )}
                                {level === 3 && (
                                    <h3
                                        className={'title font-medium-sp'}
                                        ref={textRef}
                                    >
                                    {title}
                                        {/* {this.handleKeyword(title)} */}
                                    </h3>
                                )}
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <style jsx>{`
                    .img {
                        background-image: url(${src});
                        height: 100%;
                        background-position: center center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .outfit-card {
                        overflow: hidden;
                        line-height: 0;
                        position: relative;
                        display: inline-block;
                        height: 100%;
                        width: 100%;
                        //transition: all 0.2s;
                        background: #e0e0e0;
                    }
                    .outfit-card img {
                        width: 100%;
                        height: 100%;
                        object-position: center;
                        object-fit: cover;
                    }
                    .outfit-card .cover {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        justify-content: center;
                        display: flex;
                        align-items: center;
                        background-color: rgba(27, 27, 27, 0);
                        // transition: all 0.5s;
                        text-align: center;
                    }
                    .outfit-card .tag-cover {
                        color: white;
                        background-color: rgba(27, 27, 27, 0.3);
                    }
                    .outfit-card .cover .text-container {
                        white-space: pre-line;
                        color: white;
                        width: 11.9444vw;
                        word-break: break-word;
                        word-wrap: break-word;
                    }
                    .outfit-card .cover .text-notie {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 4;
                        overflow: hidden;
                    }
                    .outfit-card .cover .text-notie .text-box { 
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 4;
                        overflow: hidden;
                    }
                    .outfit-card .cover .text-ie {
                        max-height: calc(4 * 24px);
                        position: relative;
                    }
                    .outfit-card .cover .text-ie:after {
                        content: '...';
                        display: inline-block;
                        position: absolute;
                        height: 24px;
                        line-height: 24px;
                        bottom: 2px;
                        right: -0.4em;
                        text-align: right;
                        width: 2em;
                    }
                    .outfit-card .cover .text-ie .text-box {
                        overflow: hidden;
                        height: calc(4 * 24px);
                    }
                    .outfit-card .cover .text-container .title {
                        font-size: 16px;
                        line-height: 24px;
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: center;
                    }
                    .outfit-card .cover {
                        width: 100%;
                        height: 100%;
                    }

                    @media only screen and (min-width: 1025px) {
                        .outfit-card:focus {
                            outline: 1px dashed #3c8c8c;
                        }
                        .outfit-card .cover:focus {
                            background-color: rgba(27, 27, 27, 0.3);
                        }
                        .outfit-card .cover.hover:hover {
                            background-color: rgba(27, 27, 27, 0.3);
                        }
                        .outfit-card .cover:active {
                            background-color: rgba(27, 27, 27, 0.4) !important;
                        }
                        .outfit-card .tag-cover.hover:hover {
                            background-color: rgba(27, 27, 27, 0.6);
                        }
                        .outfit-card .tag-cover:active {
                            background-color: rgba(27, 27, 27, 0.4) !important;
                        }
                        .outfit-card .tag-cover:focus .text-container {
                            color: white;
                        }
                        .outfit-card .tag-cover.hover:hover .text-container {
                            color: white;
                        }
                        .outfit-card .tag-cover:active .text-container {
                            color: white;
                        }

                        .outfit-card .cover .text-container {
                            max-width: 191px;
                        }
                    }

                    @media only screen and (max-width: 768px) {
                        .outfit-card {
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                        .outfit-card .cover .text-container {
                            width: 31.25vw;
                            word-break: break-word;
                            word-wrap: break-word;
                        }
                        .outfit-card .cover .text-ie {
                            max-height: calc(4 * 24px);
                            position: relative;
                        }
                        .outfit-card .cover .text-ie:after {
                            height: 24px;
                            line-height: 24px;
                            right: -0.6em;
                        }
                        .outfit-card .cover .text-ie .text-box {
                            height: calc(4 * 24px);
                        }
                        .outfit-card .cover .text-container .title {
                            font-size: 15px;
                            line-height: 22px;
                        }
                        .outfit-card .cover .text-container {
                            width: 31.25vw;
                        }

                        .outfit-card .cover {
                            background-color: rgba(27, 27, 27, 0);
                        }
                        .outfit-card .cover:active {
                            background-color: rgba(27, 27, 27, 0.1);
                        }

                        .outfit-card .tag-cover {
                            background-color: rgba(27, 27, 27, 0.3);
                        }
                        .outfit-card .tag-cover:active {
                            background-color: rgba(27, 27, 27, 0.4);
                        }

                        .outfit-card .tag-cover:active .text-container {
                            color: white;
                        }
                    }

                    @media only screen and (min-width: 768px) and (max-width: 1024px) {
                        .outfit-card {
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                        .outfit-card .cover .text-container {
                            width: 31.25vw;
                            word-break: break-word;
                            word-wrap: break-word;
                        }
                        .outfit-card .cover .text-ie {
                            max-height: calc(4 * 24px);
                            position: relative;
                        }
                        .outfit-card .cover .text-ie:after {
                            height: 24px;
                            line-height: 24px;
                            right: -0.6em;
                        }
                        .outfit-card .cover .text-ie .text-box {
                            height: calc(4 * 24px);
                        }
                        .outfit-card .cover .text-container .title {
                            font-size: 15px;
                            line-height: 22px;
                        }
                        .outfit-card .cover .text-container {
                            width: 20.3125vw;
                        }

                        .outfit-card .cover {
                            background-color: rgba(27, 27, 27, 0);
                        }
                        .outfit-card .cover:active {
                            background-color: rgba(27, 27, 27, 0.1);
                        }

                        .outfit-card .tag-cover {
                            background-color: rgba(27, 27, 27, 0.3);
                        }
                        .outfit-card .tag-cover:active {
                            background-color: rgba(27, 27, 27, 0.4);
                        }

                        .outfit-card .tag-cover:active .text-container {
                            color: white;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default ImageCard
