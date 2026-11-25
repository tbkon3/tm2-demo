import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{c as t,f as n,h as r}from"./button-Dnt_Sddd.js";import{i,n as a,r as o,t as s}from"./tabs-4IGSZy2n.js";import{t as c}from"./CopyButton-DCIxjfIc.js";var l=[{language:`python`,name:`Python`,install:`pip install standardwebhooks`,code:`import os

from flask import Flask, request
from standardwebhooks import Webhook, WebhookVerificationError

app = Flask(__name__)
# Il segreto whsec_ che hai copiato una volta sola: leggilo dall'ambiente, mai dal codice.
webhook = Webhook(os.environ["TUNEMATES_WEBHOOK_SECRET"])


@app.post("/tunemates")
def receive():
    try:
        # Serve il corpo così come è arrivato, non riscritto.
        event = webhook.verify(request.get_data(), dict(request.headers))
    except WebhookVerificationError:
        return "", 400
    # Scarta i doppioni: lo stesso messaggio può arrivare più volte (webhook-id).
    already_seen = event["id"] in SEEN_IDS
    if not already_seen:
        SEEN_IDS.add(event["id"])
        handle(event)
    return "", 204
`},{language:`node`,name:`Node`,install:`npm install standardwebhooks`,code:`import express from "express";
import { Webhook } from "standardwebhooks";

const app = express();
// Il segreto whsec_ che hai copiato una volta sola: leggilo dall'ambiente, mai dal codice.
const webhook = new Webhook(process.env.TUNEMATES_WEBHOOK_SECRET);

app.post("/tunemates", express.raw({ type: "application/json" }), (req, res) => {
    try {
        // Serve il corpo così come è arrivato, non riscritto.
        const event = webhook.verify(req.body.toString("utf8"), req.headers);
        // Scarta i doppioni: lo stesso messaggio può arrivare più volte (webhook-id).
        if (!seen.has(event.id)) {
            seen.add(event.id);
            handle(event);
        }
        res.status(204).end();
    } catch {
        res.status(400).end();
    }
});
`},{language:`php`,name:`PHP`,install:`composer require standard-webhooks/standard-webhooks`,code:`<?php
use StandardWebhooks\\Webhook;
use StandardWebhooks\\Exception\\WebhookVerificationException;

// Il segreto whsec_ che hai copiato una volta sola: leggilo dall'ambiente, mai dal codice.
$webhook = new Webhook(getenv("TUNEMATES_WEBHOOK_SECRET"));

// Serve il corpo così come è arrivato, non riscritto.
$body = file_get_contents("php://input");

try {
    $event = $webhook->verify($body, getallheaders());
} catch (WebhookVerificationException $e) {
    http_response_code(400);
    exit;
}

// Scarta i doppioni: lo stesso messaggio può arrivare più volte (webhook-id).
if (!already_seen($event["id"])) {
    remember($event["id"]);
    handle($event);
}
http_response_code(204);
`},{language:`csharp`,name:`C#`,install:`dotnet add package StandardWebhooks`,code:`using StandardWebhooks;

var secret = Environment.GetEnvironmentVariable("TUNEMATES_WEBHOOK_SECRET");
var webhook = new Webhook(secret!);

app.MapPost("/tunemates", async (HttpRequest request) =>
{
    // Serve il corpo così come è arrivato, non riscritto.
    using var reader = new StreamReader(request.Body);
    var body = await reader.ReadToEndAsync();
    var headers = new System.Net.WebHeaderCollection();
    foreach (var header in request.Headers) headers.Add(header.Key, header.Value.ToString());

    try
    {
        webhook.Verify(body, headers);
    }
    catch (WebhookVerificationException)
    {
        return Results.BadRequest();
    }

    // Scarta i doppioni: lo stesso messaggio può arrivare più volte (webhook-id).
    return Results.NoContent();
});
`}],u=e(r(),1),d=n();function f({snippets:e,defaultLanguage:n,labels:r,copy:l,className:f}){let[p,m]=(0,u.useState)(n??e[0]?.language??`python`);return(0,d.jsxs)(`div`,{className:t(`flex min-w-0 flex-col gap-3`,f),children:[(0,d.jsx)(`p`,{className:`text-body2 text-muted-foreground`,children:r.note}),(0,d.jsxs)(s,{value:p,onValueChange:m,className:`gap-3`,children:[(0,d.jsx)(o,{variant:`line`,"aria-label":r.languages,className:`h-auto! w-full justify-start gap-1 border-b p-0`,children:e.map(e=>(0,d.jsx)(i,{value:e.language,className:`h-auto! min-h-11 flex-none px-3`,children:e.name},e.language))}),e.map(e=>(0,d.jsxs)(a,{value:e.language,className:`flex min-w-0 flex-col gap-3`,children:[(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,children:[(0,d.jsxs)(`p`,{className:`text-caption text-muted-foreground`,children:[r.install,`: `,(0,d.jsx)(`span`,{className:`font-mono text-foreground`,children:e.install})]}),(0,d.jsx)(c,{value:e.code,labels:r.copy,ariaLabel:r.copyName(e.name),onCopy:l})]}),(0,d.jsx)(`pre`,{tabIndex:0,"aria-label":r.codeLabel(e.name),className:`max-h-112 overflow-auto rounded-md border bg-background-paper p-3 font-mono text-caption leading-relaxed focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,children:(0,d.jsx)(`code`,{children:e.code})})]},e.language))]})]})}export{l as n,f as t};