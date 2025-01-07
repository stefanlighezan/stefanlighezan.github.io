
## Triad - JavaScript Mathematical Renderer
I recently came upon the United Nation's Sustainable Development Goals (SDGS) and I knew that there was some way I could potentially help at least progress one of those goals. Of the 17 goals, the 4th goal: education; stook out to me. As a student in high school, it became obvious that what I put out could not be maintained and appended to each day; ergo no bootleg Khan Academy, etc... I do however know that even as a student in high school, I can put out quality. So, I decided that one way to help education, is to make tools that people can use to educate. Typically you would see mathematical animations rendered in Manim, a Python library, however I believe that people who do not know how to program, but want to make enticing math animations should have a tool to do so, which is why I made Triad. Triad is completely UI based.

## Documentation
Object Properties:
- The first two object properties are the start and end frame, they basically say when to show the object on the screen and when to stop
- The next two object properties are the position of the object, note (0, 0) is the center of the screen
- The next two object properties after that are the dimensions properties, which change the dimensions
- The first color option chooses the border color, which is coming in Triad 1.0.1
- The second color option chooses the color of the object
- The slider after that is the opacity of the object
- The slider after that slider is the z-index, which allows you to stack objects on top of each other and make sure one is on top of the other or vice versa
- The next three sliders are rotation.
- Animations have three properties in this order:
- - Start Frame: What frame to start the animation
- - Duration: How many frames is the animation
- - Other: The other property of animations is the scale factor which is only applicable to scale animations.
