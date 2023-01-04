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

If we want to add animations, then they should probably done in the ui side with some sort of flag to let the ui know,
so that the data in the classes can define one. (We might want something that does water wave animation, or changing colors)

Colors should be implemented in a similar way, the symbol will have a tag that can be interpreted and turned into

```html
<span styles="color: red;">{SYMBOL}</span>
```

## Notes

* `react-app-env.d.ts` is in the correct place, it gives the project access to all the types that react uses (for use with Typescript) do not move.

## Here is a current Todo list

* Connect World Data to WorldGrid UI
* Add Monster Class
* Add Tree Class
* Add Keyboard Input
