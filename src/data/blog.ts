// The blog. Covers are editorial posters (public/assets/blog/poster-<slug>.webp). Each post body is light markup, rendered by components/blog/PostBody:
//   ## Heading, ### Subheading, blank-line paragraphs, "- " and "1. " lists, "> " callouts,
//   **bold**, *italic*, [text](url), [[screen:name|caption]] for an app screen in the phone frame
//   (public/assets/blog/screen-<name>.webp), and [[cta]] for the download card.

export interface PostSource {
  label: string;
  url: string;
}

export interface Post {
  slug: string;
  title: string;
  /** Meta description and card text */
  description: string;
  category: 'The science' | 'How to' | 'Methods' | 'Affirmations';
  date: string;
  cover: string;
  coverAlt: string;
  keywords: string[];
  sources: PostSource[];
  body: string;
}

const POSTS_UNSORTED: Post[] = [
  {
    slug: 'do-affirmations-work',
    title: 'Do affirmations actually work? What the research says',
    description:
      'Affirmations can help, but not the way most quote cards suggest. Here is what decades of self-affirmation research found, when positive statements backfire, and how to use them so they work.',
    category: 'The science',
    date: '2026-10-08',
    cover: '/assets/blog/poster-do-affirmations-work.webp',
    coverAlt: 'Poster reading "Do affirmations actually work?" beside a phone showing the affirmation "I\'m learning to trust my own voice in the room" and Glim, Aura\'s mascot.',
    keywords: ['do affirmations work', 'science of affirmations', 'self-affirmation theory', 'positive affirmations research'],
    sources: [
      { label: 'Steele, C. M. (1988). The psychology of self-affirmation. Advances in Experimental Social Psychology, 21.', url: 'https://doi.org/10.1016/S0065-2601(08)60229-4' },
      { label: 'Cohen, G. L., & Sherman, D. K. (2014). The psychology of change: Self-affirmation and social psychological intervention. Annual Review of Psychology, 65.', url: 'https://doi.org/10.1146/annurev-psych-010213-115137' },
      { label: 'Creswell, J. D., et al. (2005). Affirmation of personal values buffers neuroendocrine and psychological stress responses. Psychological Science, 16(11).', url: 'https://doi.org/10.1111/j.0956-7976.2005.01649.x' },
      { label: 'Wood, J. V., Perunovic, W. Q. E., & Lee, J. W. (2009). Positive self-statements: Power for some, peril for others. Psychological Science, 20(7).', url: 'https://doi.org/10.1111/j.1467-9280.2009.02370.x' },
      { label: 'Cascio, C. N., et al. (2016). Self-affirmation activates brain systems associated with self-related processing and reward and is reinforced by future orientation. Social Cognitive and Affective Neuroscience, 11(4).', url: 'https://doi.org/10.1093/scan/nsv136' },
      { label: 'Epton, T., Harris, P. R., Kane, R., van Koningsbruggen, G. M., & Sheeran, P. (2015). The impact of self-affirmation on health-behavior change: A meta-analysis. Health Psychology, 34(3).', url: 'https://doi.org/10.1037/hea0000116' },
    ],
    body: `
Search "do affirmations work" and you will find two camps. One says a sentence repeated in the mirror can rewire your life. The other says it is wishful thinking with nice typography. The research sits somewhere more interesting than either.

The short answer: **affirmations can help, under the right conditions, and they can also make you feel worse.** The difference comes down to what you say, whether you believe it, and what it is connected to.

## Two different things called "affirmations"

Most of the confusion comes from one word being used for two practices.

The first is the popular version: short positive statements, repeated often. "I am confident." "I am a magnet for abundance." This is what fills social feeds.

The second is what psychologists call **self-affirmation**. It grew out of work by Claude Steele in the late 1980s. His idea was that people have a basic need to see themselves as good and capable, and that when one part of that picture is threatened, reminding yourself of something else you value helps you stay steady. In studies, self-affirmation usually means writing for a few minutes about a value that matters to you, such as family, honesty or creativity, and why.

These two are related, but they are not the same. Most of the strong evidence is about the second one.

## What the research actually found

Geoffrey Cohen and David Sherman's 2014 review in the *Annual Review of Psychology* pulled together decades of this work. The pattern they describe is consistent: brief, well-timed affirmations of personal values can reduce defensiveness and help people perform and cope better in moments where they feel judged or threatened. The effects are often small, but in the right setting they can last surprisingly long, because a little extra steadiness at a key moment changes what happens next.

A few findings stand out:

- **Stress.** In a 2005 study led by David Creswell, people who affirmed their personal values before a stressful public-speaking and maths task showed a smaller cortisol response than people who did not.
- **Health behaviour.** A 2015 meta-analysis by Tracy Epton and colleagues found that self-affirmation had small but real effects on how people responded to health messages, and on their intentions and behaviour afterwards.
- **The brain.** A 2016 brain-imaging study by Christopher Cascio and colleagues found that self-affirmation engaged regions involved in thinking about yourself and in reward. The effect was stronger when people reflected on values in relation to the *future*.

That last point matters. Affirmation seems to work best when it connects who you are to where you are going, not when it simply declares a finished result.

## When positive statements backfire

Here is the part most affirmation content leaves out.

In 2009, Joanne Wood and her colleagues asked people to repeat the statement "I am a lovable person." People who already had high self-esteem felt slightly better afterwards. People with low self-esteem felt *worse*.

The likely reason is simple. When a statement is far from what you believe, saying it does not close the gap. It shines a light on it. Your mind answers back with all the reasons it is not true, and you end up rehearsing the doubt instead of the belief.

> If an affirmation makes you wince, that is not a sign you are doing it wrong. It is a sign the line is too far from where you are today.

## What makes an affirmation more likely to help

Putting the research together, the affirmations most likely to help share five qualities.

1. **They are rooted in your values.** "I care about being someone my friends can rely on" has more to hold on to than "I am amazing."
2. **They are believable.** Process language like "I am learning to" or "I am becoming" leaves room for where you actually are.
3. **They are specific to your life.** A line about the meeting you are dreading lands harder than a line about success in general.
4. **They point forward and connect to action.** "Today I will say one thing in the meeting" turns a feeling into a step.
5. **They are short and repeated at a steady time.** Repetition builds familiarity, and a fixed moment in the day makes it a habit rather than an effort.

## Try it this week

You do not need an app or a mirror for this. You need five minutes.

1. Write down three things you value most. Not goals, values: kindness, independence, family, craft, honesty.
2. Pick one, and write three sentences about a time it guided you.
3. Turn it into a single line you could say tomorrow morning and mean. For example: *"I am someone who shows up for the people I love, even on tired days."*
4. Say it once each morning for a week, then notice whether it still feels true. If it does, keep it. If it does not, soften it.

## How Aura approaches it

Aura was built around this research. Before it writes anything, it asks what you value and what you want to bring into your life. Then it asks how you see the practice and shows you a few lines, so you can say which feel true, which you want to be true, and which feel fake. Everything it writes afterwards is pitched at a level you can believe, and it grows with you.

[[screen:calibration|Aura asks which lines you could actually say out loud and mean, then writes at that level.]]

## The honest summary

Affirmations are not magic, and they are not nonsense. The version that works is quieter than the internet suggests: a believable sentence, tied to something you value, said at a steady moment, pointing toward a small step. Do that consistently, and the research suggests it can help you stay steadier when it matters.

[[cta]]
`,
  },
  {
    slug: 'why-affirmations-feel-fake',
    title: 'Why affirmations feel fake, and how to write ones you believe',
    description:
      'If saying "I am confident" makes you cringe, your brain is telling you something useful. Here is why affirmations feel fake, and five ways to rewrite them so they finally land.',
    category: 'How to',
    date: '2026-10-12',
    cover: '/assets/blog/poster-why-affirmations-feel-fake.webp',
    coverAlt: 'Poster reading "Why affirmations feel fake", with a crossed-out line "I am completely confident in every situation" and a believable one, "I\'m learning to trust my own voice."',
    keywords: ['affirmations feel fake', 'how to write affirmations', 'believable affirmations', 'affirmations that work'],
    sources: [
      { label: 'Wood, J. V., Perunovic, W. Q. E., & Lee, J. W. (2009). Positive self-statements: Power for some, peril for others. Psychological Science, 20(7).', url: 'https://doi.org/10.1111/j.1467-9280.2009.02370.x' },
      { label: 'Kross, E., et al. (2014). Self-talk as a regulatory mechanism: How you do it matters. Journal of Personality and Social Psychology, 106(2).', url: 'https://doi.org/10.1037/a0035173' },
      { label: 'Cohen, G. L., & Sherman, D. K. (2014). The psychology of change: Self-affirmation and social psychological intervention. Annual Review of Psychology, 65.', url: 'https://doi.org/10.1146/annurev-psych-010213-115137' },
    ],
    body: `
You read a list of affirmations. You pick one. You say it out loud: "I am completely confident in every situation." And a small voice inside you answers, very clearly: *no, you are not.*

If that sounds familiar, you are not bad at affirmations. You are just using lines that were written for someone else, at a level you do not believe yet.

## Why your brain pushes back

Your mind is not a blank wall you can paint new beliefs on. It is more like a careful editor. When you give it a sentence that clashes with years of experience, it checks the sentence against the evidence it has, and it rejects what does not fit.

Psychologists saw this happen in a 2009 study by Joanne Wood and colleagues. When people with low self-esteem repeated "I am a lovable person," their mood got worse, not better. The statement was so far from what they believed that it brought up all the counter-evidence.

So the cringe is not failure. It is information. It tells you the gap between the line and your belief is too wide.

## The believability ladder

Think of every affirmation as sitting on one of three rungs:

- **It feels fake.** You say it and something in you argues back.
- **I want it to be true.** You do not quite believe it yet, but you like where it points.
- **That's true.** You can say it and mean it.

The goal is not to jump straight to the top rung. It is to work on the middle one, lines you want to be true and can almost believe, and let them move up over time. When a line becomes "that's true," write the next one a little further out.

## Five ways to rewrite an affirmation so it lands

### 1. Use process language

Swap "I am" for "I am learning to," "I am becoming," or "I am getting better at."

- Instead of: *"I am confident when I speak."*
- Try: *"I am learning to trust my own voice in the room."*

This is honest about where you are, and still points where you are going.

### 2. Anchor it in evidence

Your mind accepts what it has already seen. Remind it.

- Instead of: *"I can handle anything."*
- Try: *"I have handled hard conversations before, and I can handle this one."*

### 3. Use choice language

Feelings are hard to command. Choices are not.

- Instead of: *"I am calm."*
- Try: *"I choose to take one slow breath before I answer."*

### 4. Make it smaller and more specific

Big general lines are easy to argue with. Small specific ones are not.

- Instead of: *"I am successful."*
- Try: *"Today I will finish the first page."*

### 5. Talk to yourself by name

Research led by Ethan Kross found that using your own name or "you" during self-talk, instead of "I," helped people manage stress before a difficult task. A little distance makes the words feel like encouragement from someone on your side, rather than a claim you have to defend.

- Instead of: *"I am ready for this."*
- Try: *"You've prepared for this, Maya. You're ready to begin."*

> A good test: say the line out loud. If you wince, step down a rung. If it feels a little too easy, step up one.

## Words that make lines feel fake

Sometimes it is not the claim that feels wrong, it is the vocabulary. If you are a practical person, "the universe is aligning for me" may never sound like you, however true you want it to be. If you are spiritual, a dry productivity line can feel empty.

There is no correct language for affirmations. There is only *your* language. Notice which words make you roll your eyes, and leave them out.

[[screen:language|Aura asks what kind of language lands for you: the universe and energy, neuroscience and mindset, faith, or just practical.]]

## A five-minute rewrite exercise

1. Write the affirmation that feels most fake to you right now.
2. Under it, write what your inner voice says back.
3. Now write a version that answers that voice honestly, using one of the five techniques above.
4. Say the new version out loud. Adjust a word or two until it feels like you.

For example:

- **Fake:** "I love my body."
- **Inner voice:** "No you don't. You avoid mirrors."
- **Rewrite:** "I am learning to thank my body for what it does for me every day."

## How Aura helps with this

Aura was designed for people who find standard affirmations hard to say. During setup it asks which lines feel true, which you want to be true, and which feel fake, and it asks which words and topics you would rather it never use. Everything it writes is pitched at a level you can believe, in language that sounds like you.

[[screen:never-mention|Anything you'd rather Aura stayed away from, words or topics, stays out of everything it writes.]]

## The takeaway

Affirmations feel fake when they are too far from where you are, or written in someone else's voice. Bring them closer: process language, real evidence, small choices, your own words. A line you can believe today will do more for you than a perfect one you cannot.

[[cta]]
`,
  },
  {
    slug: '369-method',
    title: 'The 369 method: how it works, and an honest look at whether it helps',
    description:
      'The 369 manifestation method went viral for a reason. Here is exactly how to do it, what the evidence does and does not say, and a version that adds the one thing most people leave out.',
    category: 'Methods',
    date: '2026-10-15',
    cover: '/assets/blog/poster-369-method.webp',
    coverAlt: 'Poster reading "The 369 method, honestly", with the numbers 3, 6 and 9 for morning, afternoon and evening, beside Aura\'s daily affirmation card.',
    keywords: ['369 method', '369 manifestation method', 'how to do the 369 method', 'does the 369 method work'],
    sources: [
      { label: 'Kappes, H. B., & Oettingen, G. (2011). Positive fantasies about idealized futures sap energy. Journal of Experimental Social Psychology, 47(4).', url: 'https://doi.org/10.1016/j.jesp.2011.02.003' },
      { label: 'Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. American Psychologist, 54(7).', url: 'https://doi.org/10.1037/0003-066X.54.7.493' },
      { label: 'Calm: The 369 manifestation method, what it is and does it work', url: 'https://blog.calm.com/blog/369-manifestation-method' },
    ],
    body: `
If you have spent any time on manifestation TikTok, you have seen it: notebooks filled with the same sentence written over and over, three times in the morning, six in the afternoon, nine at night. The 369 method is one of the most shared manifestation techniques online. It is also one of the easiest to start.

Here is exactly how it works, what we honestly know about it, and how to make it more useful.

## What the 369 method is

The idea is simple. You choose one clear intention, and you write it down:

- **3 times** in the morning
- **6 times** in the afternoon
- **9 times** in the evening

People usually keep doing this for a set period, often 33 or 45 days.

The method is often credited to the inventor Nikola Tesla, who reportedly had a fascination with the numbers 3, 6 and 9. There is no reliable record of Tesla teaching or practising anything like it. The method as people know it today spread through social media.

## How to do it, step by step

1. **Choose one intention.** One. Writing several dilutes the focus.
2. **Write it in the present tense, as if it is already happening.** "I am starting my own studio." "I am calm in the mornings."
3. **Make it short enough to write nine times without dread.** One sentence.
4. **Pick three fixed moments.** For example: after breakfast, after lunch, before bed.
5. **Write slowly.** The point is attention, not speed. Many people pause to picture the outcome after each line.
6. **Keep it up for a few weeks** and notice what changes in how you think and act.

## Does the 369 method work?

There is no scientific evidence that the numbers 3, 6 and 9 have any special power, and no study has tested the 369 method directly. If you are looking for proof that writing a sentence 18 times a day will deliver an outcome on its own, it does not exist.

But that does not mean the practice is useless. Look at what it actually asks you to do:

- **Get clear on one thing you want.** Many people have never written their goal down in a single sentence.
- **Return to it three times a day.** Repeated attention makes it more likely you will notice opportunities related to it.
- **Build a small daily ritual.** Rituals create a sense of commitment and continuity.

Those are real benefits. The risk is in what the method leaves out.

> Psychologist Gabriele Oettingen's research found that *only* fantasising about an ideal future can lower the energy people put into reaching it. Picturing the finish line can feel so good that it quietly replaces the work.

In a 2011 study by Heather Kappes and Gabriele Oettingen, people who imagined an idealised future felt more relaxed afterwards, and showed less of the energy you need to go after something. Imagining success is pleasant. It just is not enough.

The fix, from decades of goal research, is to pair the vision with a plan. Peter Gollwitzer's work on **implementation intentions**, simple "when X happens, I will do Y" plans, found they make people noticeably more likely to follow through.

## A better 369: vision, action, evidence

Keep the rhythm, change what each moment is for.

- **3 in the morning: the vision.** Write your intention three times. *"I am building a calm, steady morning routine."*
- **6 in the afternoon: the action.** Write one small step you will take, as a plan. *"When I close my laptop at 6, I will lay out tomorrow's clothes."* Writing it six times is fine; what matters is that it is concrete.
- **9 in the evening: the evidence.** Write down signs, however small, that you moved toward it today. *"I woke up without snoozing. I didn't check my phone first."*

This version keeps everything people love about 369, the clarity, the ritual and the repetition, and adds the two things research says matter most: a plan, and noticing progress.

## Common mistakes

- **Changing the intention every few days.** Give one sentence time to settle.
- **Writing something you do not believe at all.** If the line makes you wince, soften it. "I am learning to" is still manifesting.
- **Treating it as a lottery ticket.** The practice works best as a focus tool, not a replacement for doing the thing.
- **Making it a chore.** If nine lines feels heavy, the method is not serving you. Three honest lines beat nine rushed ones.

## How Aura uses 369

Aura includes 369 as one of several affirmation techniques, alongside identity phrasing and scripting. Instead of choosing a technique for you and hiding the reasoning, each line comes with a short explanation of the technique behind it, so you understand why it is phrased the way it is.

[[screen:words-for-today|Each day brings one affirmation, written from your own promise, that you can hear read aloud or share as a card.]]

[[screen:three-ways|Ask for a new set and Aura gives you three ways to say it, each with a note on why it works.]]

## The bottom line

The 369 method is not magic, and it does not need to be. Used well, it is a simple daily structure for getting clear on what you want and keeping it in front of you. Add a plan and a moment to notice progress, and it becomes something more useful than a viral trend: a habit that moves you.

[[cta]]
`,
  },
  {
    slug: 'letter-to-your-future-self',
    title: 'How to write a letter to your future self (with 15 prompts)',
    description:
      'A letter to or from your future self is one of the most moving journaling exercises there is. Here is why it works, how to write one step by step, 15 prompts, and an example.',
    category: 'How to',
    date: '2026-10-19',
    cover: '/assets/blog/poster-letter-to-your-future-self.webp',
    coverAlt: 'Poster reading "A letter to your future self", with a handwritten letter beginning "Dear Maya" sealed in ember wax, beside Aura\'s first-letter screen.',
    keywords: ['letter to your future self', 'letter from your future self', 'future self journaling', 'future self prompts'],
    sources: [
      { label: 'Hershfield, H. E., et al. (2011). Increasing saving behavior through age-progressed renderings of the future self. Journal of Marketing Research, 48.', url: 'https://doi.org/10.1509/jmkr.48.SPL.S23' },
      { label: 'Pennebaker, J. W. (1997). Writing about emotional experiences as a therapeutic process. Psychological Science, 8(3).', url: 'https://doi.org/10.1111/j.1467-9280.1997.tb00403.x' },
    ],
    body: `
Most of us treat our future selves like strangers. We know they exist, we hope they will be fine, and we leave them to deal with whatever we did not get to today.

Writing a letter, to that person or from them, is one of the simplest ways to close that distance. It is also one of the most quietly powerful journaling exercises you can do.

## Why it works

Psychologist Hal Hershfield has spent years studying how connected people feel to their future selves. In one well-known set of studies, people who saw realistic, age-progressed images of themselves chose to set aside more money for retirement than people who saw their current faces. Feeling closer to who you will become changed what people did today.

A letter does the same thing with words. When you write to or from your future self, that person stops being an abstraction and becomes someone you care about. And the act of writing itself helps. Decades of research by James Pennebaker and others found that putting thoughts and feelings into words helps people make sense of them.

## Two kinds of letters

There are two ways to do this, and both are worth trying.

- **A letter *to* your future self.** You write as yourself today, to be opened later, often in one, five or ten years. It is a time capsule: what you are hoping for, what you are worried about, what you want to remember.
- **A letter *from* your future self.** You imagine you have already become who you want to be, and you write back to yourself today. This one is closer to scripting, and it tends to be more encouraging, because the future you knows how the story turns out.

## How to write a letter from your future self

1. **Pick a date.** One year from today is a good start. Far enough to change, close enough to picture.
2. **Picture a specific day in that future.** Where are you? What does the morning feel like? Who is around?
3. **Start with "Dear [your name]."** Write to yourself the way a kind, older friend would.
4. **Be concrete.** "I have a garden now, and the tomatoes did better than I expected" beats "life is great."
5. **Acknowledge the hard parts.** Your future self knows what today feels like. "I remember how heavy October felt" makes the rest believable.
6. **Name what got you there.** Usually it is something small and repeated: the walk, the early night, the three minutes each morning.
7. **End with something to carry.** One sentence you want today's you to hold on to.

## 15 prompts to get you started

- What does an ordinary morning look like for you now?
- What are you proudest of from the past year?
- What were you worried about back then that turned out fine?
- What did you finally let go of?
- Who has become more important to you?
- What small habit made the biggest difference?
- What would you tell me about the day I almost gave up?
- What do you do now that would have scared me?
- How do you talk to yourself these days?
- What does your home feel like?
- What did you stop apologising for?
- What are you still working on, and why is that okay?
- What should I spend less time worrying about?
- What should I start this week?
- What do you want me to remember on the hard days?

## An example

> *Dear Maya,*
>
> *I am writing from a Tuesday next October. It is early, the window is open, and I am drinking coffee on the balcony before anyone else wakes up. You would not believe how normal that feels now.*
>
> *I remember how heavy last autumn was. You were tired of starting things and not finishing them. I want you to know that the studio happened, slowly, one quiet morning at a time. Not because of one big leap, but because you kept showing up for three minutes when you did not feel like it.*
>
> *On the hard days, be kind to yourself. I am only here because you were.*
>
> *With love, from the one who already made it.*

## What to do with your letter

- **Keep it somewhere you will see it.** A notes app, a journal, an email scheduled to yourself.
- **Reread it when you feel stuck.** Hearing from the version of you who made it is surprisingly steadying.
- **Write a new one when the old one starts to feel true.** That is the best sign it worked.

## Aura's first letter

The first thing Aura gives you is a letter like this. After a few gentle questions about what you want and what usually gets in the way, you hold to light it, and Aura writes a letter from your future self, in your own words, and reads it to you in a voice that says your name. It is kept forever on every plan, and new letters arrive on day 7, 30 and 100.

[[screen:first-letter|Hold to light your first letter.]]

[[screen:letter-end|Your future self has more to tell you. The letter is kept, and it is yours forever.]]

## Start today

You do not need a perfect sentence or a special notebook. Set a timer for ten minutes, write "Dear" and your name, and let the person you are becoming do the talking. You might be surprised how much they have to say.

[[cta]]
`,
  },
  {
    slug: 'affirmations-for-confidence',
    title: '40 affirmations for confidence that don\'t sound fake',
    description:
      'Confidence affirmations that you can actually say and mean, grouped by where confidence wobbles most: speaking up, how you look, work, certain people, and hard days.',
    category: 'Affirmations',
    date: '2026-10-22',
    cover: '/assets/blog/poster-affirmations-for-confidence.webp',
    coverAlt: 'Poster reading "40 affirmations for confidence", with the line "My ideas deserve to be heard, even unfinished" and Glim waving.',
    keywords: ['affirmations for confidence', 'confidence affirmations', 'self-confidence affirmations', 'affirmations for self-esteem'],
    sources: [
      { label: 'Wood, J. V., Perunovic, W. Q. E., & Lee, J. W. (2009). Positive self-statements: Power for some, peril for others. Psychological Science, 20(7).', url: 'https://doi.org/10.1111/j.1467-9280.2009.02370.x' },
      { label: 'Cohen, G. L., & Sherman, D. K. (2014). The psychology of change: Self-affirmation and social psychological intervention. Annual Review of Psychology, 65.', url: 'https://doi.org/10.1146/annurev-psych-010213-115137' },
    ],
    body: `
Confidence is rarely missing everywhere at once. Most people feel fine in some rooms and shrink in others. You might be steady with friends and freeze in meetings, or sure of your work and unsure of how you look.

That is why generic lines like "I am confident" often fall flat. They try to fix everything and end up fitting nothing. The affirmations below are grouped by **where** confidence tends to wobble, and written to be believable. Many use "I am learning to" on purpose: research suggests lines that feel too far from what you believe can backfire, while lines you can almost believe give you room to grow.

## How to use this list

1. **Find the section that matches where your confidence wobbles most.**
2. **Pick one or two lines that you want to be true and can almost believe.** Skip anything that makes you wince.
3. **Say it once each morning, out loud if you can.** Same time every day.
4. **Pair it with one small action.** A line about speaking up works best on a day you plan to say one thing in a meeting.

## When you need to speak up

1. I am learning to trust my own voice in the room.
2. My ideas deserve to be heard, even when they are not finished.
3. I can say one thing today, and that is enough.
4. I have spoken up before, and I can do it again.
5. A pause before I speak is calm, not weakness.
6. I can disagree kindly and still belong here.
7. I am allowed to take up space in a conversation.
8. Each time I speak, it gets a little easier.

## About how you look

9. I am learning to see my body as something that carries me, not something to fix.
10. I can thank my body for what it did for me today.
11. How I look is the least interesting thing about me.
12. I choose clothes that make me feel like myself.
13. I am more than the parts of me I notice in photos.
14. I can look in the mirror without grading what I see.
15. My body is allowed to change, and I am still me.
16. I deserve to feel at home in my own skin.

## At work

17. I have solved hard problems before, and I will solve this one.
18. I am learning, and learning is part of the job.
19. Not knowing something yet is the start, not a failure.
20. I can ask for help and still be good at what I do.
21. I bring something to this team that no one else does.
22. I am allowed to be proud of work I finished.
23. One clear step today is real progress.
24. I can be new at something and still belong here.

## Around certain people

25. I can stay myself, even around people who make me nervous.
26. Their opinion is information, not a verdict on who I am.
27. I do not need everyone to like me to be okay.
28. I can set a boundary and still be kind.
29. I am learning to notice when I shrink, and to stand back up.
30. I belong in rooms I have been invited into.
31. I can leave a conversation that does not respect me.
32. The people who matter like me as I actually am.

## On the hard days

33. Today I only need to do the next small thing.
34. A hard day is not a sign I am going backwards.
35. I have been here before, and I came through it.
36. I can be gentle with myself and still move forward.
37. Confidence is something I practise, not something I lose.
38. I am allowed to rest without earning it.
39. Even small steps count today.
40. Tomorrow I can begin again.

> If none of these feel right, that is useful too. It means your confidence needs lines written for your specific situation, not a general list.

## Make one your own

The most powerful affirmation is the one written about your life. Use this template:

**"I am learning to [what you want to do] when [the situation where you wobble], because [why it matters to you]."**

For example: *"I am learning to say my idea out loud in Monday meetings, because I want my team to know what I can do."*

## Why Aura asks where it wobbles

When you tell Aura you want more confidence, it does not stop there. It asks where it wobbles most: speaking up, how you look, your work, or around certain people. Every morning after that, it writes a short moment for that exact situation, in your own words, at a level you can believe.

[[screen:confidence-context|Because you chose confidence, Aura asks where it wobbles most, so nothing it writes is generic.]]

[[screen:insight|Then it reflects back what it heard, so you can check it got you right.]]

## Start small

Pick one line from this list. Say it tomorrow morning. Do one small thing that matches it. Confidence is built the same way trust is: one kept promise at a time.

[[cta]]
`,
  },
  {
    slug: 'gratitude-one-line-a-night',
    title: 'One line of gratitude a night: what it changes, and how to start',
    description:
      'You do not need a gratitude journal with three pages a night. Here is what the research says about gratitude, why one specific line works, and 20 prompts for the nights you draw a blank.',
    category: 'How to',
    date: '2026-10-27',
    cover: '/assets/blog/poster-gratitude-one-line-a-night.webp',
    coverAlt: 'Evening poster reading "One line of gratitude a night", with the line "The light on the kitchen wall at 5pm" and a sleepy Glim under the moon.',
    keywords: ['gratitude journal', 'gratitude journaling benefits', 'gratitude prompts', 'evening gratitude practice'],
    sources: [
      { label: 'Emmons, R. A., & McCullough, M. E. (2003). Counting blessings versus burdens. Journal of Personality and Social Psychology, 84(2).', url: 'https://doi.org/10.1037/0022-3514.84.2.377' },
      { label: 'Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6).', url: 'https://doi.org/10.1002/ejsp.674' },
    ],
    body: `
Gratitude journaling has a reputation problem. It sounds like homework: three pages a night, five things you are thankful for, every single evening. Most people start enthusiastically and stop within a week.

The good news is that the part that matters is much smaller than that. One honest, specific line before bed is enough to start.

## What the research says

The best-known study here is from 2003, by Robert Emmons and Michael McCullough. They asked people to write down, once a week, either things they were grateful for, things that had annoyed them, or simply events from their week. After ten weeks, the gratitude group felt better about their lives as a whole, were more optimistic about the week ahead, reported fewer physical complaints, and spent more time exercising than the group writing about hassles.

Since then, many studies have looked at gratitude practices. The effects are usually modest rather than dramatic, and they vary from person to person. But the direction is consistent: regularly noticing what is good tends to shift attention away from what is missing.

## Why one line works better than five

A long list sounds more powerful, but it often goes wrong in two ways.

- **It becomes a chore.** When a practice feels heavy, people drop it. A habit only helps if you keep doing it.
- **It gets generic.** By item five, most people are writing "my family, my health, my home." True, but it stops being noticed and starts being recited.

One line keeps the effort low and the attention high. Research by Phillippa Lally and colleagues found that new daily habits took anywhere from a few weeks to many months to become automatic, with a median of around 66 days. Something you can do in thirty seconds is far more likely to survive that long than something that takes ten minutes.

## How to write a good gratitude line

The difference between a line that does something and a line that does not is specificity.

- **Generic:** "I'm grateful for my friends."
- **Specific:** "Priya texted to ask how the interview went, before I said anything."

- **Generic:** "I'm grateful for nature."
- **Specific:** "The light on the kitchen wall at 5pm."

A few things that help:

1. **Make it small.** Small counts. Small is usually better.
2. **Make it from today.** Not your life in general, this day in particular.
3. **Include a person when you can.** Gratitude toward people seems to carry extra warmth.
4. **Add "because" if you have a second.** *"...because it reminded me I'm not doing this alone."*

> Your line does not need to be profound. "The first sip of coffee on the balcony before anyone else wakes up" is a perfect gratitude line.

## 20 prompts for nights you draw a blank

- What made you smile today, even briefly?
- Who made today a little easier?
- What did you eat that you enjoyed?
- What went better than you expected?
- What is something your body did for you today?
- What sound or smell did you like?
- What did you learn, however small?
- What problem did you solve?
- Which message or call are you glad you got?
- What moment of quiet did you have?
- What is one thing in your home you are glad to have?
- Who would you thank if you could?
- What did you see on your way somewhere?
- What did you finish, even partly?
- What made you laugh?
- What did someone do for you without being asked?
- What part of your routine did you enjoy?
- What is something you used to wish for that you now have?
- What did you let go of today?
- What are you looking forward to tomorrow?

## When you really cannot think of anything

Some days are just hard, and forcing cheer helps no one. On those nights, try one of these:

- **Go physical.** A warm shower. A soft pillow. Being horizontal at last.
- **Go tiny.** A song. A cup of tea. A text from anyone.
- **Go back.** Something from earlier this week that you did not write down.

Or skip it. A gratitude practice that allows for rest days is more likely to last than one that punishes them.

## How Aura uses your evening line

In Aura, the evening is when you write one thing you are glad about. There are gentle prompts if you need them, and your line is kept safe. But it does not just sit in a list. What you write may come back in your morning moments, so a good thing from Tuesday night can become part of what you hear on Thursday morning. Your record shows a month of lit days, and every entry can be deleted.

[[screen:gratitude|Name one thing you're grateful for. Small counts. Small is usually better.]]

## Start tonight

Before you put your phone down tonight, write one line. Something small, something from today, something specific. That is the whole practice. Do it again tomorrow.

[[cta]]
`,
  },
];

export const POSTS = [...POSTS_UNSORTED].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function readingMinutes(post: Post) {
  return Math.max(1, Math.round(post.body.split(/\s+/).filter(Boolean).length / 220));
}

export function formatPostDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
