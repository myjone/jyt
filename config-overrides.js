const { override, fixBabelImports, addLessLoader,addWebpackAlias} = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
           }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            "@primary-color": "#105CFB",
            "@linerBackground":"linear-gradient(90deg,#40a9ff 0,#105cfb 100%)",
            "@placeholderColor":'#e2e2e2',
            "@titleSize":'16px',
            "@titleColor":'#333',

            
        },
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'), //配置全局路径
    }),
    // (config) =>{
    //     config.module.rules[2].oneOf[5].use.push({
    //         loader: require.resolve('sass-resources-loader'),
    //         options: {
    //           resources:path.resolve(__dirname, 'src/assets/styles/common.less')
    //         }
    //     })
    //     return config
    //   }
);