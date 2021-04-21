import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://ebb41a1392e44532bfcf5fe756b15fa4@o576091.ingest.sentry.io/5729255",
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
};