# Завдання lesson-1

Створити додаток Labyrinth

## Технічні вимоги

За допомогою `create-react-app` або `vite` створити новий додаток `labyrinthMap-app`

Використати стилі з файлу `labyrinthMap.css` та структуру html

```html
<div class="art-board">
    <div class="art-board-labyrinth">
        <div class="row">
            <div class="wall-cell"></div>
            <div class="space-cell"></div>
            ....
       </div>
        ....
    </div>
    <div class="art-board-navigation">
        <div class="row-map-size item">
            <div class="input-group">
                <span class="input-group-placeholder">Size</span>
                <input type="number" id="mapSize">
            </div>
            <button type="button" class="button">Map size</button>
        </div>
        <div class="button-wrapper item">
            <button type="button" class="button">Refresh Map</button>
        </div>
    </div>
</div>
```



За замовчуванням розмір лабіринта 15х15

Кнопка Refresh Map повинна перезібрати лабіринт

Кнопка Map size повинна перевіряти якщо в input є значання більше 1 то перезібрати лабіринт

Зробити функцію MapGenerated яка рондомно буде створювати карту 

```js
    [
        [1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    ]
```
