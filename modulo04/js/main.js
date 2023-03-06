const char = new Knight('Anthony');
const monster = new LittleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);

stage.start();
