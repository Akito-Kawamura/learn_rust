use wasm_bindgen::prelude::*;

// #[wasm_bindgen] をつけることで、JavaScriptから呼び出せるようになります
#[wasm_bindgen]
pub fn rust_sort(mut arr: Vec<i32>) -> Vec<i32> {
    // Rustの標準の高速なソート（パターン回避型クイックソートなど）を実行
    arr.sort();
    arr
}