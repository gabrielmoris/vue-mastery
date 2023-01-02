## The structure of the component should be:

APP -> Action -> Modal

## Instead of

APP -> Action
L> Modal

But If I add an style to the Action Component, it will affect also the Modal. We solve it by using Teleport
