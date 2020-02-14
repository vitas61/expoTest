import * as React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';

import {GLView} from 'expo-gl';
// import {THREE} from 'expo-three';
import ExpoTHREE from 'expo-three';
import * as THREE from 'three';
import { THREE as THREE2 } from 'expo-three';
global.THREE = global.THREE || THREE2;

import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';
import {MtlObjBridge} from 'three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js';

export default class ExpoTreeTest extends React.Component {
    /*renderer: any;
      scene: any;
      camera: any;
      geometry : any;
      material : any;
      obj : any;
      line : any;
      edges : any;*/

    componentDidMount() {
        // THREE.suppressExpoWarnings(true);
    }

    constructor(props) {
        super(props);

        //this._onGLContextCreate = this._onGLContextCreate.bind(this);
        //this.animate = this.animate.bind(this);
    }





    _onGLContextCreateSec = async gl => {


        //console.log("_onGLContextCreateSec");


        const {drawingBufferWidth: width, drawingBufferHeight: height} = gl;
        let scene = new THREE.Scene();
        // 2. Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            gl.drawingBufferWidth / gl.drawingBufferHeight,
            0.3,
            1000,
        );
        // 3. Renderer
        //const renderer = ExpoTHREE.Renderer({gl});
        const renderer = new ExpoTHREE.Renderer({
            canvas: {
                width,
                height,
                style: {},
                addEventListener: () => {},
                removeEventListener: () => {},
                clientHeight: height,
            },
            context: gl,
        });

        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        // Define our shape (Below is a tetrahedron, but can be whatever)
        const geometry = new THREE.TetrahedronBufferGeometry(2, 0);
        // Define the material, Below is material with hex color #00ff00
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        // For custom material of any image, simply download any image into your project and use:
        // Define the full 3-D object
        const objectToRender = new THREE.Mesh(geometry, material);
        // Specifying the cameras Z position will allow the object to appear in front of the camera rather that in line (which the camera which is the default)
        camera.position.z = 3;

        const geometry2 = new THREE.BoxGeometry(2, 2, 2);



        //const material2 = new THREE.MeshBasicMaterial({color: 0x00ff00});

        // const material2 = new THREE.MeshBasicMaterial({
        //     map: await ExpoTHREE.loadAsync(
        //         'http://sroprosper.qwerbit.ru/test/textures/shoes01_diffuse.png',
        //     )
        // });
        //
        //
        //
        // const res = {
        //     'female_casualsuit02_normal_png': await ExpoTHREE.loadTextureAsync({asset:'http://sroprosper.qwerbit.ru/test/dae/textures/female_casualsuit02_normal.png'}),
        //     'shoes01_diffuse_png': await ExpoTHREE.loadTextureAsync({asset:'http://sroprosper.qwerbit.ru/test/dae/textures/shoes01_diffuse.png'}),
        //     'shoes01_normal_png': await ExpoTHREE.loadTextureAsync({asset:'http://sroprosper.qwerbit.ru/test/dae/textures/shoes01_normal.png'}),
        //     'fedora_texture_png': await ExpoTHREE.loadTextureAsync({asset:'http://sroprosper.qwerbit.ru/test/dae/textures/fedora_texture.png'}),
        //     'fedora_normal_png': await ExpoTHREE.loadTextureAsync({asset:'http://sroprosper.qwerbit.ru/test/dae/textures/fedora_normal.png'}),
        //     'fedora_displacement_png': await ExpoTHREE.loadTextureAsync({asset:'http://sroprosper.qwerbit.ru/test/dae/textures/fedora_displacement.png'}),
        // }
        //
        // const mtl = await ExpoTHREE.loadMtlAsync({
        //     asset: 'http://sroprosper.qwerbit.ru/test/test3.mtl',
        //     onAssetRequested: res,
        // });


        // const model = {
        //     'test.obj': 'http://sroprosper.qwerbit.ru/test/test.obj',
        //     'test3.mtl': 'http://sroprosper.qwerbit.ru/test/test3.mtl',
        // };

        // let ar = function (v) {
        //     console.log("@@@@@@@@@@@@",v)
        // }
        //
        //     const cube = await ExpoTHREE.loadDaeAsync({
        //       asset: 'http://sroprosper.qwerbit.ru/test/dae/test.dae',
        //       //onAssetRequested:
        //     });

        /*
                const cube = await ExpoTHREE.loadAsync(
                    [model['test.obj'], model['test3.mtl']],
                    null,
                    name => res[name],
                );
        */

        /*
            const cube2 = await ExpoTHREE.loadAsync(
                [model['test.obj'], model['test3.mtl']],
                null,
                null
            );
        */


        /*
            const mtl = await ExpoTHREE.loadMtlAsync({
              asset: 'http://sroprosper.qwerbit.ru/test/t/body.mtl',
              onAssetRequested: function (res) {
                console.log("@@@@@@@@@@_",res)
              }
            });



            const m = new THREE.MeshBasicMaterial({
              name: 'body',
              map: await ExpoTHREE.loadAsync(
                  'http://sroprosper.qwerbit.ru/test/textures/shoes01_diffuse.png',
              )
            });


        */

        /*const model = {
            'body.obj': 'http://sroprosper.qwerbit.ru/test/t/body.obj',
            'body.mtl': 'http://sroprosper.qwerbit.ru/test/t/body.mtl',
            'textures/young_lightskinned_female_diffuse3.png': 'http://sroprosper.qwerbit.ru/test/t/young_lightskinned_female_diffuse3.png',
            'young_lightskinned_female_diffuse3.png': 'http://sroprosper.qwerbit.ru/test/t/young_lightskinned_female_diffuse3.png',
        };*/


        //const texture = await ExpoTHREE.loadTextureAsync({ asset: require('./assets/young_lightskinned_female_diffuse3.png') });
        //const texture = await ExpoTHREE.loadTextureAsync({ asset: require('./assets/young_lightskinned_female_diffuse3.png') });

        // const res = {
        //          'female_casualsuit02_normal_png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/textures/female_casualsuit02_normal.png')}),
        //          'shoes01_diffuse_png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/textures/shoes01_diffuse.png')}),
        //          'shoes01_normal_png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/textures/shoes01_normal.png')}),
        //          'fedora_texture_png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/textures/fedora_texture.png')}),
        //          'fedora_normal_png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/textures/fedora_normal.png')}),
        //          'fedora_displacement_png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/textures/fedora_displacement.png')}),
        //     }
        //
        // const model = await ExpoTHREE.loadAsync(
        //     'http://sroprosper.qwerbit.ru/test/dae/test.dae',
        //     null,
        //     res,
        // );


        const model = {
             'body.obj': require('./assets/body.obj'),
             'body.mtl': require('./assets/body.mtl'),
             //'young_lightskinned_female_diffuse3.png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/young_lightskinned_female_diffuse3.png')})
             //'young_lightskinned_female_diffuse3.png': await ExpoTHREE.loadTextureAsync({asset: require('./assets/young_lightskinned_female_diffuse3.png')})
        };

         const assetProvider = (name) => {
             return model[name];
         };

        // const materials = await loadMtlAsync({
        //     asset: require('./assets/body.mtl'),
        //     onAssetRequested: null,
        // });

        console.log('@@@imageName: ');

        // /// Load model!
        const mesh = await ExpoTHREE.loadAsync(
            ['http://sroprosper.qwerbit.ru/test/test.obj',
                'http://sroprosper.qwerbit.ru/test/test.mtl'
            ],
             null,
             imageName => {
                console.log('@@@imageName: ', imageName);
                 return model[imageName];
             },
        );
        //
        ExpoTHREE.utils.scaleLongestSideToSize(mesh, 2);
        // ExpoTHREE.utils.alignMesh(mesh, { y: 0.3, x: 0.5 });

        // const cube = await ExpoTHREE.loadObjAsync({
        //     asset: 'http://sroprosper.qwerbit.ru/test/t/body.obj',
        // });

        //const cube = new THREE.Mesh(geometry2, material2);

        /*
            let loader = OBJLoader2();

            function callbackOnLoad ( object3d ) {
              scene.add( object3d );
            }
            loader.load( 'http://sroprosper.qwerbit.ru/test/t/body.obj', callbackOnLoad, null, null, null );
        */

        // {
        //     const mtlLoader = new MTLLoader();
        //     mtlLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.mtl', (mtlParseResult) => {
        //         console.log("@@@@@@@@___",mtlParseResult)
        //         const objLoader = new OBJLoader();
        //         const materials =  MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
        //
        //         objLoader.load('http://sroprosper.qwerbit.ru/test/t/body.obj', (root) => {
        //             scene.add(root);
        //             console.log("@@@@@@@")
        //         });
        //     });
        // }


        //scene.add(objectToRender);
        // scene.add(cube);
        //scene.add(loader);
        scene.add(mesh);
        // scene.add(mtl);

        const animate = () => {
            requestAnimationFrame(animate);
            //objectToRender.rotation.x += 0.01;
            //objectToRender.rotation.y += 0.01;
            //mesh.rotation.x += 0.03;
            //mesh.rotation.y += 0.02;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        };
        animate();
    };

    render() {
        return (
            <View style={styles.container}>
                <GLView
                    style={{width: 300, height: 600}}
                    onContextCreate={this._onGLContextCreateSec}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: '#ecf001',
        padding: 8,
    },
});
