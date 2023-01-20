<script lang="ts">
    const tiles = Array(9);

    const data = {};

    type PlayerTurn = 0 | 1;

    let playerTurn:PlayerTurn = 0;

    const determineWin = (player:PlayerTurn) => {
        for(let i = 0; i < 3; i++) {
            const horizontalWin = (tiles[3 * i] === player) && (tiles[3 * i + 1] === player) && (tiles[3 * i + 2] === player);
            const verticalWin = (tiles[i] === player) && (tiles[3 + i] === player) && (tiles[6 + i] === player);
            
            if(horizontalWin || verticalWin) {
                alert("YOU WIN!");

                return player;
            }
        }

        const diagOne = tiles[2] === player && tiles[4] === player && tiles[6] === player;
        const diagTwo = tiles[0] === player && tiles[4] === player && tiles[8] === player;

        if(horizontalWin || verticalWin || diagOne || diagTwo) {
            alert("YOU WIN!");

            return player;
        }
    };

    const handler = (position) => {
        if(tiles[position] !== undefined) {
            return;
        }
        
        tiles[position] = playerTurn;
        
        determineWin(playerTurn);

        // Change turn
        playerTurn = playerTurn === 0 ? 1 : 0;
    };

</script>

turn: {playerTurn}
<main class="p-10 flex justify-center">
    <div class="max-w-5xl grid grid-cols-3 grid-rows-3">
        {#each tiles as item, idx}
            <button
                class="btn p-10 btn-outline"
                on:click={() => handler(idx)}>
                {#if item === 0}
                    X
                {:else if item === 1}
                    O
                {:else}
                    -
                {/if}
            </button>
        {/each}
    </div>
</main>
