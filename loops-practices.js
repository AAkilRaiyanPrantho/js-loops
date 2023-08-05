// Loop Practices
// 1

for ( i=1; i<=39; i++)
{
    console.log(i + '. Ajke amar mon valo nei');
}

// 2

i = 58;
while(i <= 98)
{
    console.log(i);
    i++;
}

// 3

i = 412
while(i <= 456)
{
    if( i % 2 == 0)
    {
        console.log(i);
    }
    i++;
}

// 4

for ( i = 581; i<=623; i++)
{
    if( i % 2 != 0)
    {
        console.log(i);
    }
}


// 5
/* Differentiation Table
Basis of Comparison	For Loop	While Loop
Keyword	Uses for keyword	Uses while keyword
Used	For loop is used when the number of iterations is already known.	While loop is used when the number of iterations is already Unknown.
absence of condition	The loop runs infinite times in the absence of condition	Returns the compile time error in the absence of condition
Nature of Initialization	Once done, it cannot be repeated	In the while loop, it can be repeated at every iteration.
Functions	To iterate, the range or xrange function is used.	There is no such function in the while loop.
Initialization based on iteration	To be done at the beginning of the loop.	In the while loop, it is possible to do this anywhere in the loop body.
Generator Support	Python's for loop can iterate over generators.	While loops cannot be directly iterated on Generators.
Speed	The for loop is faster than the while loop.	While loop is relatively slower as compared to for loop. */

// 6

var topics = ['HTML','CSS','Tailwind','DaisyUI','Bootstrap','JavaScript','Variables','Arrays','Conditionals','Loops'];
for ( i = 0; i < topics.length; i++)
{
    console.log(topics[i]);
}


// 7

var mobile = ['Siemens','Motorola','Maximus','Techno','CK','Symphony','Nokia','Samsung','Xiaomi','Redmi'];

i = 0;
while(i < mobile.length)
{
    console.log(mobile[i]);
    i++;
}

// 8

for ( var i = 30; i < 86; i++)
{
    if(i > 44)
    {
        break;
    }
    console.log(i);
}

// 9

var bookPrices = [ 150, 300, 490, 30, 1005, 210, 190];
for(var i = 0; i < bookPrices.length; i++)
{
    if(bookPrices[i] > 200)
    {
        continue;
    }
    console.log(bookPrices[i]);
}