# AI Workflow Comparison

This exercise compared two different approaches to using AI during development.

In the first round, I provided only a vague prompt asking the AI to build a settings form. The generated code produced a basic interface with three input fields and a submit button. However, the validation was incomplete, accessibility features such as aria-labels were missing, and the component did not disable submission when invalid. No tests were generated. I had to manually review the code and fix several issues before it could be used confidently.

In the second round, I used a structured prompt with clear requirements, file locations, constraints, expected behaviour, accessibility requirements, and a verification step requesting tests. The resulting implementation was much closer to production quality. The component used controlled inputs, displayed validation messages, prevented invalid submissions, and included React Testing Library tests covering common user interactions.

Comparing both branches showed that the structured prompt required more time initially because writing the specification took several minutes. However, the total development time was lower because much less manual review and debugging was required.

One AI mistake I caught was that the first version accepted alphabetic characters in the phone number field and allowed the form to submit. This violated the intended validation rules. In the second version, tests exposed validation problems immediately, making them easier to fix.

Overall, this exercise demonstrated that directing AI with precise specifications, constraints, examples, and verification produces more reliable software than simply asking AI to build a feature. The review effort shifted from fixing missing functionality to confirming correctness, which is a much more efficient workflow.
