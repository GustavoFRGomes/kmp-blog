---
date: 2026-08-30
draft: false
---

# Thinking Machines - Inkling

So [Thinking Machines](https://thinkingmachines.ai/), which is part of the "spun-off" start-ups from OpenAI (Anthropic can be considered the first), released some time back their open-weight Inkling pair of models. With [Inkling](https://thinkingmachines.ai/news/introducing-inkling/) totalling 975B parameters (41B active) and its little brother [Inkling-Small](https://thinkingmachines.ai/news/inkling-small/) 276B (12B active), both are Mixture-of-Experts models and both represent what most can be said to represent the "West's" big answer to the Chinese dominance of bit open-weight models, such as DeepSeek v4 Pro, Kimi K3 or Qwen 3.8 all of which surpass the 1T parameter size.

Parameter count isn't everything when it comes to the capacity of the model, but as a very poor rule of thumb it is a good gauge about how good a model will be.

## What was tested?
So I was playing around with another model but in the meantime it was removed, I will let you the reader puzzle it together if you want, and so I was still quite deep into developing a Flutter application that would run local models, so I thought, why not to try to continue my development by just switching the history prompt to OpenRouter's free offering of [Inkling:free](https://openrouter.ai/thinkingmachines/inkling:free) (of course the provider is Thinking Machines themselves), and this model does state that Thinking Machines can then train their models. So overall the model seems to be a bit more passive, at least that is my feeling, I was looking at the intermediate reasoning tokens, and it did not love to play well with my Pi setup, specially it was arguing over my [ponytail](https://pi.dev/packages/@dietrichgebert/ponytail?name=ponytail) skill.

There was, though, something very weird. Every now and again, when I gave it a broad instruction, something like "make the app also implement ONNX and ONNX-GenAI in tandem with LiteRT-LM which was already implemented", it was very cautious and also decided on multiple occasions to just stub things. The stubbing was okay initially until I realised that even when I said to proceed and go through the implementation it would actually attempt it and on the first few signs of issues (project wasn't building, or implementation created a crash) it would come back to stubbing it and just say it stubbed it...again...and again...and again.

One more quirk that I found was that the model was too literal some times. In this case, the specific example, came down to the fact that I instruct the models to always sign in a "footer" of the commit message their model and harness, and basically Inkling decided to add "Footer: produced by inkling:free via OpenRouter". The quirk here is that it didn't need the "Footer" part of that sentence, other models didn't add it and so I can also chalk it to the model being too literal and also not looking at previous commit history, the reasoning wasn't on par with other models in this specific case, sadly.

Don't get me wrong the model did perform some good coding and it did follow instructions quite well, and tokens per second was great, but the stubbing persistent approach made me give up on it after a few days.

## Why does it exist?
I have a theory, which is also shared by a couple of people on Youtube (to be honest I cannot recall if it was Theo - T3 or Prime - ThePrimaegen), that this is going to still be a model that people will use, specially bigger companies that are wary of the Chinese open-weight models. This model pair, and more specifically the bigger one, is not at 1T but close, and it is by far the biggest non-Chinese open-weight model out there.

This does matter for those companies that are forbidden, mainly by law, but also by some security fears, of the alternatives. Sadly, the current political divide between the US, China and others is growing large and affecting various areas and AI/technology is one of them. So this model can still be marketed as an alternative for those companies and agencies that do not or cannot use other, best in class, models.

## Final Thoughts
Personally, and this is really an opinion, I will not use it any further. I have stopped using the free version and almost probably I will not use the paid version any time soon. The ultimate reason was due to how stubborn that model was, and also how literal it took some of the commands.

Note: the model, at least both free versions could only be used via agentic harnesses and not as something like a conversational model
