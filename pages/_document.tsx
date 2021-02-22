import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

type Props = {
    url: any
    region: any
    locale: any
    localeDataScript: any
}

class MyDocument extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await super.getInitialProps(ctx)
        // const {
        //     req: {
        //         headers: { url, region, locale, localeDataScript },
        //     },
        // } = ctx
        return {
            ...initialProps
        }
    }

    render() {
        return (
            <Html lang={this.props.locale}>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
