int i;
int j;
PFont font;
PFont finalFont;
float[] values;
long swaps;
long iterationCount=0;
long time=0;
long totalSwaps=0;
long n=10;
String []sort ={" Bubble Sort "," Insertion Sort "};
void setup() {
    
    font = createFont("ProcessingSansPro-Regular.ttf",24);
    size(1000,900);
    background(#050505);
    values = new float[width];
  iterationCount++;
  totalSwaps=totalSwaps+swaps; 
  i=0;j=0;swaps=0;time=millis();
  for(int count=0;count<values.length;count++)
    values[count] = random(height-100);
 
}

void draw() {
  background(#050505);
     if(iterationCount<=n)
    {
       drawElements();
    printStatements();
    //System.out.println("Iteration count"+iterationCount);
    if(i<width)
    {
    for(int j=0;j<1000-i-1;j++)
    {
      if(values[j]>values[j+1])
        swap(values,j,j+1);
    }
    drawElements();
    i=i+1;
    }
    if(i==width)
    setup();
  }
  else{
    text("Bubble Sort of 1000 Random Elements", 25,50);
    text("Total Iterations: "+n,25,150);
    text("Total No of Swaps: "+totalSwaps+ " Average Swaps: "+totalSwaps/n ,25,250);
    text("Total Time taken: "+(time)+" ms Average Time Complexity: "+time/n+" ms",25,350);
  }

}

void bubblesort(float []values)
{
  for(;iterationCount<=10;)
 {
   if(iterationCount<=n)
    {
       drawElements();
    printStatements();
    //System.out.println("Iteration count"+iterationCount);
    if(i<width)
    {
    for(int j=0;j<1000-i-1;j++)
    {
      if(values[j]>values[j+1])
        swap(values,j,j+1);
    }
    drawElements();
    i=i+1;
    }
    if(i==width)
    setup();
  }else{
    
    text("Bubble Sort of 1000 Random Elements", 25,50);
    text("Total Iterations: "+n,25,150);
    text("Total No of Swaps: "+totalSwaps+ " Average Swaps: "+totalSwaps/n ,25,250);
    text("Total Time taken: "+(time)+" ms Average Time Complexity: "+time/n,25,350);
  }
 }
}
  

void swap(float []values,int i,int j)
{
    float temp=values[i];
    values[i]=values[j];
    values[j]=temp;
    swaps=swaps+1;
}

void printStatements()
{
    text("No of Swaps: "+swaps,25,50);
    text("Iteration Count: "+iterationCount,240,50);
    text("Bubble Sort of 1000 Random Elements", 450,50);
    text("Time Complexity: "+( millis()-time )+" ms",750,50);
}

void drawElements()
{
  
   for(int k = 0;k<values.length;k++)
    {
      stroke(#151443);
      line(k,height,k,height-values[k]);
    }
}
