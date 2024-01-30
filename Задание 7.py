# Поэксперементируйте над значениями.

from turtle import *
t = Turtle()
bgcolor("black")
sides = 2 # от 2 до количества цветов.
colors=["red","yellow","green","blue","orange","purple"]
for x in range(150):
    t.pencolor(colors[x%sides])
    t.forward(x*3/sides+x)
    t.left(360/sides+1)
    t.width(x*sides/200)
exitonclick()
print ("End ")