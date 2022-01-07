// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size
{
  constructor(width = 80, height = 60)
  {
    this.width = width;
    this.height = height;
  }

  resize(width, height)
  {
    this.width = width;
    this.height = height;
  }
}

export class Position
{
  constructor(x = 0, y = 0)
  {
    this.x = x;
    this.y = y;
  }

  move(newX, newY)
  {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow
{
  constructor()
  {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize)
  {
    newSize.width = this.meetLimit(newSize.width, 1, this.screenSize.width, this.position.x);
    newSize.height = this.meetLimit(newSize.height, 1, this.screenSize.height, this.position.y);

    this.size.resize(newSize.width, newSize.height);
  }

  move(newPosition)
  {
    newPosition.x = this.meetLimit(newPosition.x, 0, this.screenSize.width, this.size.width);
    newPosition.y = this.meetLimit(newPosition.y, 0, this.screenSize.height, this.size.height);

    this.position.move(newPosition.x, newPosition.y);
  }

  meetLimit(value, minValue, maxValue, addedValue)
  {
    if (value < minValue)
    {
      value = minValue;
    }
    else if (value + addedValue > maxValue)
    {
      value = maxValue - addedValue;
    }
    return value;
  }

}

export function changeWindow(programWindow)
{
  programWindow.size.width = 400;
  programWindow.size.height = 300;
  programWindow.position.x = 100;
  programWindow.position.y = 150;
  return programWindow;
}
