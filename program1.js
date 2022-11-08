let arr = [1, 2, 2, 4, 4, 4, 4, 5];
        const map = new Map();

        for (let i = 0; i < arr.length; i++) {
            if (!map.has(arr[i])) {
                map.set(arr[i], 1);
            }

            else {
                let value = map.get(arr[i]);
                map.set(arr[i], value + 1);
            }
        }

        let max = 0, min = 100000000;
        for (const [key, value] of map) {
            if (value > max) {
                max = key;
            }

            if (value < min) {
                min = key;
            }
        }


        console.log([max, min]);