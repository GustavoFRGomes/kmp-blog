---
date: 2026-08-24
draft: false
---

# Ox-Alpha Review

A few days ago, OpenRouter was nice enough to email me pitching a free "stealth" model that was called ["Ox-Alpha"](https://openrouter.ai/stealth/ox-alpha). There isn't a lot of information about it but the internet has been very much on the hunt for clues as to who this model belongs to and what are its features. This is something, that personally for me, is a new category and play from an undisclosed lab in order to test their model out before attribution, so OpenRouter apparently has this category, which is further explain under their [Stealth API & Models — OpenRouter](https://openrouter.ai/stealth).

This model has specially caused quite a lot of stir mainly because it was a free model and it was boasting a context window of 1 million tokens, which already hints at being a big model, even if it's not clear how many parameters or what type of training. They do advertise on their [Ox Alpha - OpenRouter page](https://openrouter.ai/stealth/ox-alpha) that:
> Ox Alpha is a reasoning model designed for coding, sustained agentic work, and production workloads. It is suited for long-horizon software engineering, complex reasoning, and workflows that combine text with visual context.

It also boasts the capability to have as input not just text (as prompts) but also images and video, which I can at least confirm the text and image as inputs.

## Opinion and review
To me this is quite a complete model, the main usage for me was to make an Android app that would have an integration with ONNX Mobile Runtime and even more specifically I was playing around with on-device LLM models using that runtime, in alternative to LiteRT-LM. Mobile, and more specifically Android development are my bread and butter therefore the main thing for me was grabbing a very bare and empty Android project, created via Android Studio, and then asking first to create a README.md and an AGENTS.md. To me it is essential to have some project context (in the README) and then "furnishing" the AGENTS.md file with some indications - think of stuff like Clean Architecture, MVVM, specific stack, language (Kotlin of course), testing and patterns - that I would like an agent to follow when helping with my foray into specific topics.

After the creation of its own rules, I moved on to give it a quite broad prompt, asking the model to basically set up a new screen that should be a chat screen and then have a "settings" screen where I could initialise and load any model of my choosing. And I followed with a requirement that it should use ONNX runtime. Overall the Ox-Alpha performed well, the only main thing that was out of the ordinary was that it stopped sometimes, after an edit for example or running a command without following up with something for the user. I was using it through [pi.dev}(https://pi.dev) harness, but it did happen a few times, and I would need to nudge it a little bit along to continue what it was currently doing.

There wasn't any vicious circles, it also was able make even more "quirky" features like an in app bottom sheet modal that would let me browse some remote ONNX models to load them on the device (since I am a lazy dev, that didn't want just to manually download the model to the device and then tell the app where it was).

One thing that also impressed me about Ox-Alpha, which I hope is something due to the current times/recency, was able to use Material 3 components. This was not the case for older models, and by older I can say that DeepSeek v4 Flash (Preview when it came out) was not able to do and required manual corrections. Another thing that I enjoyed was that it was also a good model that would use screenshots for validation, instead of just relying on Logs from the app or user description of behaviour it was able to use ABD to launch the correct screens and "touch around" and take screenshots to then see what was there, if error messages were correct, if behaviours were as expected.

Overall I did enjoy it, even though it was supposed to be a model that would be available until the 24th of August, I can also say that during the morning of the 24th (CET) the API was already limping along with errors every now and then, so I assume the provider was already winding down.

## Where is this model coming from and when will it be released?
So for the where, it is still uncertain but there are some suspicions on Reddit and the internet that it is perhaps the GLM 5.3 "Flash" model, since it did seem to share a tokenkizer fingerprint with Z.ai GLM models as written in articles like:
[Ox Alpha fingerprinted to Z.ai GLM — YFarmX](https://yfarmx.com/ox-alpha-stealth-model-tokenizer-fingerprint/

The next question is when will it come out, for this sadly I also do not have any sort of good answer, but I did see that there was quite a lot of use of the model in OpenRouter and I think overall I was impressed and probably so were others.

Was it the best model I have ever tried? 

No it is not, but it is one of the best. Of course I can actually say it was top 3, specially because it was free, if it goes down the pecking order only time, and specially pricing will tell.

### Other links of interest
- [What Is Ox Alpha? — Capital & Compute](https://capitalandcompute.net/blog/ox-alpha-stealth-model-explained/)
- [Mystery AI model Ox Alpha — Bloomberg](https://www.bloomberg.com/news/articles/2026-08-23/mystery-ai-model-ox-alpha-draws-developers-with-free-access)
- [Free anonymous AI model — The Next Web](https://thenextweb.com/news/ox-alpha-stealth-model-openrouter-anonymous-provider)
- [Reddit threads on it (including conspiracy theories)](https://www.reddit.com/search/?q=ox+alpha+stealth+openrouter)
