# Skurk

https://user-images.githubusercontent.com/26944692/210304216-3d15a89e-fc39-416c-9939-53fb80fcebc2.mov

This is a game inspired by the original *Rogue*, with additional graphical inspirations from *Door in the Woods*.

Currently, the gameplay is undefined.

In order to start the project, run the following statement in the main `skurk` folder.

```console
npm install
npm start
```

The entrance point of the program is the `index.tsx` file which immediately forwards to the `app.tsx` file.

`app.tsx` calls the `Main.ts` function in the game folder, and that connects the ui to the game logic.
Game logic then calls `updateUI` after each turn. Each turn is always triggered by a button press.

## Notes

* `react-app-env.d.ts` is in the correct place, it gives the project access to all the types that react uses (for use with Typescript) do not move.

## Here is a current Todo list

* Add Monster Class
* Add Tree Class
* Add Symbol Animations
* Add Viewport
* Add Collisions
* Add Priority
  * Priority is defined as allowing some object not to be displayed at all when the player or other creatures step on them.
* Add Random Rooms
