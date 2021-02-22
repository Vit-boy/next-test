import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric:NextWebVitalsMetric ) {
    console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
