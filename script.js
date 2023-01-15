
let button = document.getElementById('btn')
let jokeText = document.getElementsByClassName('joke')
console.log(button)
button.addEventListener('click', getjokes)
function getjokes(){
  const random = Math.floor(Math.random() * jokelist.length)
  document.getElementsByClassName('joke')[0].innerHTML = jokelist[random]
}


let jokelist = [`0. What do you call a boomerang that won’t come back?
A stick.`,
  `1 What does a cloud wear under his raincoat?
Thunderwear.`,
  `2 Two pickles fell out of a jar onto the floor.What did one say to the other?
Dill with it.`,
  `3 What time is it when the clock strikes 13?
Time to get a new clock.`,
  `4 How does a cucumber become a pickle?
It goes through a jarring experience.`,
  `5 What did one toilet say to the other?
You look a bit flushed.`,
  `6 What do you think of that new diner on the moon?
Food was good, but there really wasn’t much atmosph`,
  `7 Why did the dinosaur cross the road?
Because the chicken wasn’t born yet.`,
  `8 Why can’t Elsa from Frozen have a balloon?
Because she will "let it go, let it go."`,
  `9. What musical instrument is found in the bathroom?
A tuba toothpaste.`,
  `10. Why did the kid bring a ladder to school?
Because she wanted to go to high school.`,
  `11. What do you call a dog magician?
A labracadabrador.`,
  `12. Where would you find an elephant?
The same place you lost her.`,
  `13. How do you get a squirrel to like you?
Act like a nut.`,
  `14. What do you call two birds in love?
Tweethearts`,
  `15. How does a scientist freshen her breath?
With experi-mints.`,
  `16. How are false teeth like stars?
They come out at night.`,
  `17. What building in your town has the most stories?
The public library.`,
  `18. What’s worse than finding a worm in your apple?
Finding half a worm.`,
  `19. What is a computer's favorite snack?
Computer chips.`,
  `20. What did one volcano say to the other?
I lava you.`,
  `21. How do we know that the ocean is friendly?
It waves.`,
  `22. What is a tornado’s favorite game to play?
Twister.`,
  `23. How does the moon cut his hair?
Eclipse it.`,
  `24. How do you talk to a giant?
Use big words.`,
  `25. What animal is always at a baseball game?
A bat.`,
  `26. What falls in winter but never gets hurt?
Snow.`,
  `27. What did the Dalmatian say after lunch?
That hit the spot.`,
  `28. Why did the kid cross the playground?
To get to the other slide.`,
  `29. What do you call a droid that takes the long way around?
R2 detour.`,
  `30. Why did the cookie go to the hospital?
Because he felt crummy.`,
  `31. Why was the baby strawberry crying?
Because her mom and dad were in a jam.`,
  `32. What did the little corn say to the mama corn?
Where is pop corn?`,
  `33. How do you make a lemon drop?
Just let it fall.`,
  `34. What did the limestone say to the geologist?
Don’t take me for granite.`,
  `35. Why does a seagull fly over the sea?
Because if it flew over the bay, it would`,
  `36. What kind of water can’t freeze?
Hot water.`,
  `38. What kind of tree fits in your hand?
A palm tree.`,
  `39. What do you call a dinosaur that is sleeping?
A dino-snore.`,
  `40. What is fast, loud and crunchy?
A rocket chip.`,
  `41. Why did the teddy bear say no to dessert?
Because she was stuffed.`,
  `42. What has ears but cannot hear?
A cornfield.`,
  `43. What did the left eye say to the right eye?
Between us, something smells.`,
  `44. What did one plate say to the other plate?
Dinner is on me.`,
  `45. Why did the student eat his homework?
Because the teacher told him it was a piec`,
  `46. When you look for something, why is it always in the last place you look?
Because when you find it, you stop looking.`,
  `47. What is brown, hairy and wears sunglasses?
A coconut on vacation.`,
  `48. What do you say to a rabbit on its birthday?
Hoppy Birthday.`,
  `49. What’s the one thing will you get every year on your birthday, guaranteed?
A year older.`,
  `50. Why do candles always go on the top of cakes?
Because it's hard to light them from the bottom.`,
  `51. What do cakes and baseball teams have in common?
They both need a good batter.`,
  `52. What goes up but never comes down?
Your age.`,
  `53. What does every birthday end with?
The letter Y.`,
  `54. What did the tiger say to her cub on his birthday?
It's roar birthday.`,
  `55. Why did the girl put her cake in the freezer?
She wanted to ice it.`,
  `56. Does a green candle burn longer than a pink one?
No, they both burn shorter.`,
  `57. Why did the little girl hit her birthday cake with a hammer?
It was a pound cake.`,
  `58. Yo Mama so small her best friend is an ant.`,
  `59. Yo Mama so old God signed her yearbook.`,
  `60. Yo Mama so short she has to hold a sign up that says, "Don't spit, I can't swim."`,
  `61. Yo Mama so small she has to slam-dunk her bus fare.`,
  `62. Yo Mama so old she rode dinosaurs to school.`,
  `63. Yo Mama so old her memory is in black and white.`,
  `64. Why didn't the quarter roll down the hill with the nickel?
Because it had more cents.`,
  `65. Why is the obtuse triangle always so frustrated?
Because it’s never right.`,
  `66. Why is six afraid of seven?
Because seven eight nine.`,
  `67. Why was the equal sign so humble?
Because he wasn’t greater than or less`,
  `68. What do you call guys who love math?
Algebros.`,
  `69. How do you stay warm in any room?
Go to the corner—it’s always 90 degree`,
  `70. Why was the fraction nervous about marrying the decimal?
Because he would have to convert.`,
  `71. Are monsters good at math?
Not unless you count Dracula.`,
  `72. Why was the math book sad?
Because it had too many problem`,
  `73. Why does nobody talk to circles?
Because there’s no point.`,
  `74. Why couldn't the pony sing a lullaby?
She was a little horse.`,
  `75. What was the first animal in space?
The cow that jumped over the moon.`,
  `76. Why don’t elephants chew gum?
They do, just not in public.`,
  `77. What did the banana say to the dog?
Bananas can’t talk.`,
  `78. How do you make an octopus laugh?
With ten-tickles.`,
  `79. What do you call a sleeping bull?
A bull-dozer.`,
  `80. How do you fit more pigs on a farm?
Build a sty-scraper.`,
  `81. What did the farmer call the cow that had no milk?
An udder failure.`,
  `82. What do you call a cow that won't give milk?
A milk dud.`,
  `83. Why do fish live in salt water?
Because pepper makes them sneeze.`,
  `84. What do you get from a pampered cow?
Spoiled milk.`,
  `85. Where do polar bears vote?
The North Poll`,
  `86. What sound do porcupines make when they kiss?
Ouch!`,
  `87. Why did the snake cross the road?
To get to the other ssside.`,
  `88. Why are fish so smart?
Because they live in school`,
  `89. What did the ocean say to the pirate?
Nothing, it just waved.`,
  `90. Why don’t pirates shower before they walk the plank?
Because they’ll just wash up on shore later.`,
  `91. What happened when Bluebeard fell overboard in the Red Sea?
He got marooned.`,
  `92. How did the pirate get his flag so cheaply?
He bought it on sail.`,
  `93. What has 8 legs, 8 arms, and 8 eyes?
8 pirates.`,
  `94. How much does it cost a pirate to get his ears pierced?
About a buck an ear.`,
  `95. Why is pirating so addictive?
They say once ye lose yer first hand, ye get hooked.`,
  `96. How do pirates know that they are pirates?
They think, therefore they arrr.`,
  `97. What is a cat's favorite color?
Purrr-ple.`,
  `98. What song does a cat like best?
Three Blind Mice.`,
  `99. Where did the school kittens go for their field trip?
To the mew-seum.`,
  `100. What kind of kitten works for the Red Cross?
 first-aid kit.`,
]


