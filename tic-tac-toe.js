 		var count=0;
 		var arr=[[0,0,0],[0,0,0],[0,0,0]];
 		function onClick(id1,i,j)
 		{
 			if(document.getElementById(id1).hasAttribute('disabled')==false)
 			{
 			if(count==0)
 			{
 			drawX(id1,i,j);
 			count=1;
 			}
 			else
 			{
 				drawO(id1,i,j);
 				
 				count=0;
 			}
 		}
 		}
function drawX(id1,i,j)
{
			var flexid=id1;
			flexid="#"+flexid;	
			$(flexid).append("<img src=\"cross.png\"></img>");
			win("x",i,j);
		}
function drawO(id1,i,j)
{
			var flexid=id1;
			flexid="#"+flexid;
			$(flexid).append("<img src=\"circle.png\"></img>");	
			win("o",i,j);	
		}
		function win(element,i,j)
		{
			arr[i][j]=element;
			var flag=0;
			for(var x=0;x<3;x++)
			{
				flag=0;
				for(var y=0;y<3;y++)
				{
					if(arr[x][y]==element)
					{
						flag+=1;
					}
				}
				if(flag==3)
				{
					break;
				}
			}
			var flag1=0;
			for(var x=0;x<3;x++)
			{
				flag1=0;
				for(var y=0;y<3;y++)
				{
					if(arr[y][x]==element)
					{
						flag1+=1;
					}
				}
				if(flag1==3)
				{
					break;
				}
			}
			var flag2=0;
			for(var x=0,y=0;y<3 && x<3;y++,x++)
			{
				if(arr[x][y]==element)
				{
					flag2+=1;
				}
			}
			var flag3=0;
			for(var x=0,y=2;y>=0 && x<3;x++,y--)
			{
				if(arr[x][y]==element)
				{
					flag3+=1;
				}
			}
			if((flag==3 || flag1==3 || flag2==3 || flag3==3) && element=="x")
			{
				alert("Player1 won");
				location.reload();
			}
			if((flag==3 || flag1==3 || flag2==3 || flag3==3) && element=="o")
			{
				alert("Player2 won");
				location.reload();
			}
	}