// 1. Wasmモジュールを読み込む
const { rust_sort } = require('./rust-sort/pkg/rust_sort.js');

// テスト用のデータ作成（10万個のランダムな整数）
const ARRAY_SIZE = 100000;
const createRandomArray = () => 
    Array.from({ length: ARRAY_SIZE }, () => Math.floor(Math.random() * ARRAY_SIZE));

console.log(`--- ベンチマーク開始 (データ件数: ${ARRAY_SIZE.toLocaleString()}件) ---`);

// --- 1. JavaScriptのソート ---
const arrForJS = createRandomArray();
console.time('JavaScript Sort');
// JSの標準ソートはデフォルトで文字列評価されるため、数値比較関数を渡す
arrForJS.sort((a, b) => a - b); 
console.timeEnd('JavaScript Sort');


// --- 2. Rust (Wasm) のソート ---
const arrForWasm = createRandomArray();
console.time('Rust (Wasm) Sort');
// Rust側の関数を呼び出す
const result = rust_sort(Int32Array.from(arrForWasm));
console.timeEnd('Rust (Wasm) Sort');

console.log('--------------------------------------------------');