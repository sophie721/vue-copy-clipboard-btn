import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';

export default {
    input: 'src/wrapper.js',
    output: {
        name: 'CopyClipboardBtn',
        exports: 'named',
        globals: {vue: 'Vue'}
    },
    plugins: [
        vue(),
        postcss()
    ]
}