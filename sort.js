let i=0;
let j=0;;
let swaps=0;
let iterationCount=0;
let time=0;
let totalSwaps=0;
let values=[];
let n=10;
let width=1250;
let height =600;
let no=0;
let startTime=0;
let sortingAlgo='';
let startFunc = 'false';
let resetFunc = 'false';
let beg=0;
let end=0;
let depth=1;
let sorted=[];
var historyIndex = 0;
function setup() {
  textSize(12);
  textFont('Georgia');
  createCanvas(width, height);
  
  iterationCount++;
  totalSwaps=totalSwaps+swaps; 
  i=0;j=0;swaps=0;time=millis();

    input();
    fill(255,255,255);
    
}

function draw() {
  background(10,10,10);
    text("No of iterations ",10,20);
    text("No of Elements",195,20);
    text("Sorting Algorithm",370,20);
    switch(sortingAlgo)
        {
            case 'Bubble Sort':bubbleSort();
                break;
            case 'Selection Sort': selectionSort();
                break;
            case 'Insertion Sort': insertionSort();
                break;

        }

}
function input()
{
    iteration = createSelect();
    iteration.position(110, 15);
    iteration.option('5');
    iteration.option('10');
    iteration.option('15');
    iteration.option('20');
   
    elements = createSelect();
    elements.position(295, 15);
    elements.option('500');
    elements.option('750');
    elements.option('1000');
    elements.option('1250');
    
    sorting = createSelect();
    sorting.position(475, 15);
    sorting.option('Merge Sort');    
    sorting.option('Bubble Sort');
    sorting.option('Selection Sort');
    sorting.option('Insertion Sort');
    
    
    button = createButton('Start Sort');
    button.position(650,15);
    button.mousePressed(startSort);
    
    button = createButton('RESET');
    button.position(750,15);
    button.mousePressed(reset);

}
function reset()
{
    resetFunc='true';
    iterationCount=0;
    totalIterations=0;
    no=0;
    i=0;
    beg=0;
    end=0;
    swaps=0;
    totalSwaps=0;
    time=millis();
    
}

function startSort()
{
    if(resetFunc!='true')
        reset();
    resetFunc='false';
    startFunc='true';
    iterationCount=1;
    startTime=millis();
    totalIterations=iteration.value();
    no=elements.value();
    beg=0;
    end=no-1;
    sortingAlgo=sorting.value();
    for(let count=0;count<no;count++)
    {
        values[count] = random(height-100);
    }
    drawElements();
    
}




function bubbleSort()
{
      if(iterationCount<=totalIterations )
    {
       drawElements();
      printStatements();
      if(i<no)
    {
    for(let j=0;j<no-i-1;j++)
    {
      if(values[j]>values[j+1])
        swap(values,j,j+1);
    }
    drawElements();
    i=i+1;
    }
    if(i==no)
    {
    setup();
     for(let count=0;count<no;count++)
    {
        values[count] = random(height-100);
    }
    }
  }
  else if(resetFunc!='true'){
      finalOutput();
    }
}

function selectionSort()
{
        if(iterationCount<=totalIterations)
        {
            if(i<no)  
        {  
            let index = i;  
            for (let j = i + 1; j < no; j++){  
                if (values[j] < values[index]){  
                    index = j;//searching for lowest index  
                }  
            }  
            swap(values,index,i);
            printStatements();
            drawElements();
        i++;    
        }
            if(i==no)
            {randomArray();
                setup();
            }
        }
        else if(resetFunc!='true'){
        finalOutput();
        }
    
}


function insertionSort()
{
      if(iterationCount<=totalIterations)
        {
    if(i++<no){ 
            let key = values[i]; 
            let j = i - 1; 
  
            while (j >= 0 && values[j] > key) { 
                values[j + 1] = values[j];
                swaps++;
                j = j - 1; 
            } 
            printStatements();
            drawElements();
            if(values[j+1]!=key)
                swaps++;
            values[j + 1] = key; 
               
     }else if(i>no){
         randomArray();
                setup();
     }
    
    
        }
    else if(resetFunc !=true){
        finalOutput();
    }
}

function finalOutput()
{
    text(sortingAlgo+" of "+no+" Random Elements", 25,50);
    text("Total Iterations: "+totalIterations,25,150);
    text("Total No of Swaps: "+float(totalSwaps)+ " Average Swaps: "+float(totalSwaps/totalIterations) ,25,250);
    text("Total Time taken: "+(time-startTime)+" ms Average Time Complexity: "+((time-startTime)/totalIterations)+" ms",25,350);
}

function drawElements()
{
  
   for(let k = 0;k<values.length;k++)
    {
      stroke(0,0,255);
      line(k,height,k,height-values[k]);
    }
}


function printStatements()
{
  fill(255,255,255);
  stroke(255,255,255);
   text("No of Swaps: "+swaps,25,50);
    text("Iteration Count: "+iterationCount,240,50);
    text(sortingAlgo+" of "+no+" Random Elements", 450,50);
    text("Time Complexity: "+( millis()-time )+" ms",750,50);
}

function randomArray()
{
     for(let count=0;count<values.length;count++)
    {
        values[count] = random(height-100);
    }
}