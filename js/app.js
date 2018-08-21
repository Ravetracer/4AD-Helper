
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    InitThis();
});

const rotationTable = [0, Math.PI / 2, Math.PI, Math.PI * 3 / 2];
const roomNumbers = [11, 12, 13, 14, 15, 16, 21, 22, 23, 24, 25, 26, 31, 32, 33, 34, 35, 36, 41, 42, 43, 44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66];

var lastX,
    lastY,
    ctx,
    entryAdd = false,
    roomAdd = false,
    entryRooms = [],
    rooms = [],
    rotation = 0,
    currentEntry = 0,
    currentRoom = 0,
    currentOffset = null,
    currentMouseEvent = null,
    coords = {};

for (var i = 0; i < 6; i++) {
    entryRooms[i] = new Image();
    entryRooms[i].src = 'img/dungeon_tiles/entry_' + String(i+1) + '.png';
}

for (var ir = 0; ir < roomNumbers.length; ir++) {
    rooms[ir] = new Image();
    rooms[ir].src = 'img/rooms/room_' + String(roomNumbers[ir]) + '.png';
}

function InitThis() {
    ctx = document.getElementById('testArea').getContext("2d");
    ctxGrid = document.getElementById('gridArea').getContext("2d");
    ctxSprites = document.getElementById('spriteArea').getContext("2d");

    $('body').keypress(function(e) {
        switch (e.charCode) {
            case 114:
                rotation++;
                if (rotation > 3) {
                    rotation = 0;
                }
                if (entryAdd) {
                    coords = getCoords(currentMouseEvent, currentOffset, entryRooms[currentEntry]);
                    RedrawSprite(ctxSprites, entryRooms[currentEntry]);
                } else if (roomAdd) {
                    coords = getCoords(currentMouseEvent, currentOffset, rooms[currentRoom]);
                    RedrawSprite(ctxSprites, rooms[currentRoom]);
                }
                break;
        }
    });

    $('#addEntry').click(function (e) {
        roomAdd = false;
        currentEntry = parseInt($('#entryRoom').val(), 10);
        entryAdd = true;
    });

    $('#addRoom').click(function (e) {
        entryAdd = false;
        currentRoom = parseInt($('#room').val(), 10);
        roomAdd = true;
    });

    // show sprite during positioning
    $('#spriteArea').mousemove(function (e) {
        if (entryAdd) {
            coords = getCoords(e, $(this).offset(), entryRooms[currentEntry]);
            RedrawSprite(ctxSprites, entryRooms[currentEntry]);
        } else if (roomAdd) {
            coords = getCoords(e, $(this).offset(), rooms[currentRoom]);
            RedrawSprite(ctxSprites, rooms[currentRoom]);
        }
    });

    // add room/entry to the map
    $('#spriteArea').mousedown(function (e) {
        if (entryAdd) {
            coords = getCoords(e, $(this).offset(), entryRooms[currentEntry]);
            RedrawSprite(ctx, entryRooms[currentEntry]);
            entryAdd = false;
        } else if (roomAdd) {
            coords = getCoords(e, $(this).offset(), rooms[currentRoom]);
            RedrawSprite(ctx, rooms[currentRoom]);
            roomAdd = false;
        }
    });

    // draw raster (30x42)
    for (var xl = 0; xl < 30; xl++) {
        DrawLine(ctxGrid, xl * 20, 0, xl * 20, 800);
    }

    for (var yl = 0; yl < 42; yl++) {
        DrawLine(ctxGrid, 0, yl * 20, 600, yl * 20);
    }

    $('div.modal').on('click', 'a[data-show-tab]', function (e) {
        e.preventDefault();
        $('#tableTabs a[href="#tab-' + $(this).attr('data-show-tab') +'"]').tab('show');
    });
}

function getCoords(e, offset, image) {
    currentMouseEvent = e;
    currentOffset = offset;

    var x = e.pageX - offset.left,
        y = e.pageY - offset.top;

    switch (rotation) {
        case 0:
            x -= image.width / 2;
            y -= image.height / 2;
            break;

        case 1:
            x += image.height / 2;
            y -= image.width / 2;
            break;

        case 2:
            x += image.width / 2;
            y += image.height / 2;
            break;

        case 3:
            x -= image.height / 2;
            y += image.width / 2;
            break;
    }

    return {
        x: x,
        y: y
    };
}

function DrawSprite(context, image, x, y, scale, rotation) {
    var xCoord = Math.round(x / 20) * 20,
        yCoord = Math.round(y / 20) * 20;

    context.setTransform(scale, 0, 0, scale, xCoord, yCoord); // sets scale and origin
    context.rotate(rotation);
    context.drawImage(image, 0, 0);
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}

function Erase(x, y, isDown) {
    ctx.clearRect(x-5,y-5,10,10);
    lastX = x; lastY = y;
}

function DrawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = "grey";
    context.lineWidth = 1;
    context.lineJoin = "round";
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function RedrawSprite(context, spriteImage) {
    ctxSprites.clearRect(0, 0, 600, 800);
    DrawSprite(context, spriteImage, coords.x, coords.y, 1, rotationTable[rotation]);
}
