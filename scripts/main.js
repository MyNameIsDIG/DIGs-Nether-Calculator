/*
 * Calculate Overworld to Nether coordinates in-game without leaving
 * by MyNameIsDIG 
 * https://github.com/MyNameIsDIG
 */

import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((chat) => {
    const { sender, message } = chat;

    if (message.startsWith('-')) {
        const parts = message.trim().toLowerCase().slice(1).split(' ').filter(Boolean);
        
        if (parts[0] === 'netherify'){
            chat.cancel = true;
            if (parts.length === 4) {
                let x = parseInt(parts[1], 10);
                const y = parseInt(parts[2], 10);
                let z = parseInt(parts[3], 10);
                if (x % 8 === 0) {
                    x /= 8;
                } else {
                    x = Math.floor(x / 8);
                }
                if (z % 8 === 0) {
                    z /= 8;
                } else {
                    z = Math.floor(z / 8);
                }
                sender.sendMessage(`Nether Coordinates: ${x}, ${y}, ${z}.`);
            } else {
                sender.sendMessage('DIG\'s Nether Calculator\n§bUsage: -netherify <x> <y> <z>');
            }
        }
    }
});