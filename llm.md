# Documentación en fichero único

Este documento contiene toda la documentación del proyecto en un solo fichero.

Orientado a informar a un LLM desde una URL del proyecto.

Además, hace una tabla de contenidos general e imprime la estructura del proyecto.

# Tabla de contenidos

- [Nwt Dialogs API](#nwt-dialogs-api)
  - [Exposición](#exposicin)
  - [Crear un diálogo con formulario y extraer la respuesta](#crear-un-dilogo-con-formulario-y-extraer-la-respuesta)
- [Nwt Toasts API](#nwt-toasts-api)
  - [Mostrar un mensaje emergente:](#mostrar-un-mensaje-emergente)
- [Nwt Errors API](#nwt-errors-api)
  - [Exposición](#exposicin)
  - [Mostrar un error](#mostrar-un-error)
  - [Captura automática de aserciones globales](#captura-automtica-de-aserciones-globales)
- [Nwt Asserter API](#nwt-asserter-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Globalizer API](#nwt-globalizer-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Importer API](#nwt-importer-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Randomizer API](#nwt-randomizer-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Environment API](#nwt-environment-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Json Storer API](#nwt-json-storer-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Settings API](#nwt-settings-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Tester API](#nwt-tester-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
  - [API](#api)
  - [Test de ejemplo](#test-de-ejemplo)
- [Nwt Process API](#nwt-process-api)
  - [Exposición](#exposicin)
  - [Permite cosas como](#permite-cosas-como)
- [NwtProcessManager](#nwtprocessmanager)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Process Manager Viewer API / Componente Vue2](#nwt-process-manager-viewer-api-componente-vue2)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Dialog Definition API](#nwt-dialog-definition-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Tester Viewer API / Componente Vue2](#nwt-tester-viewer-api-componente-vue2)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Timer API](#nwt-timer-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Utils API](#nwt-utils-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Lazy Loader API](#nwt-lazy-loader-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Framework API](#nwt-framework-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Progress Bar API](#nwt-progress-bar-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Progress Bar Viewer API / Componente Vue2](#nwt-progress-bar-viewer-api-componente-vue2)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt V-Draggable Directive - Vue directive](#nwt-v-draggable-directive---vue-directive)
  - [Exposición](#exposicin)
- [Nwt V-Resizable Directive - Vue directive](#nwt-v-resizable-directive---vue-directive)
  - [Exposición](#exposicin)
- [Nwt Common Injections API](#nwt-common-injections-api)
  - [Exposición](#exposicin)
  - [Ventajas](#ventajas)
- [Nwt Injection API](#nwt-injection-api)

# Estructura del proyecto

- 📁 documentation
  - 📄 asserter-api.md
  - 📄 common-injections-api.md
  - 📄 dialog-definition-api.md
  - 📄 dialogs-api.md
  - 📄 environment-api.md
  - 📄 errors-api.md
  - 📄 globalizer-api.md
  - 📄 globals-api.md
  - 📄 importer-api.md
  - 📄 injection-api.md
  - 📄 json-storer-api.md
  - 📄 lazy-loader-api.md
  - 📄 process-api.md
  - 📄 process-manager-api.md
  - 📄 process-manager-viewer-api.md
  - 📄 progress-bar-api.md
  - 📄 progress-bar-viewer-api.md
  - 📄 project-commands.md
  - 📄 randomizer-api.md
  - 📄 settings-api.md
  - 📄 tester-api.md
  - 📄 tester-viewer-api.md
  - 📄 timer-api.md
  - 📄 toasts-api.md
  - 📄 utils-api.md
  - 📄 v-draggable-api.md
  - 📄 v-resizable-api.md
- 📁 assets
  - 📁 reloader
    - 📄 .gitignore
    - 📄 package-lock.json
    - 📄 package.json
    - 📄 reloadable.js
    - 📄 reloader.js
    - 📄 starter.js
  - 📁 libraries
    - 📁 qunit
      - 📄 qunit.css
      - 📄 qunit.js
      - 📄 qunit.min.css
      - 📄 qunit.min.js
  - 📁 framework
    - 📁 win7
      - 📄 win7-patches.css
      - 📄 win7.css
    - 📁 vue2
      - 📄 vue2.js
      - 📄 vue2.min.js
    - 📁 socket.io-client
      - 📄 socket.io-client.js
    - 📄 nwt-asserter.js
    - 📄 nwt-boot.js
    - 📄 nwt-dialog-definition.js
    - 📄 nwt-environment.js
    - 📄 nwt-globalizer.js
    - 📄 nwt-importer.js
    - 📄 nwt-injection.js
    - 📄 nwt-json-storer.js
    - 📄 nwt-lazy-loader.js
    - 📄 nwt-pack.js
    - 📄 nwt-process-manager.js
    - 📄 nwt-process.js
    - 📄 nwt-progress-bar.js
    - 📄 nwt-randomizer.js
    - 📄 nwt-settings.js
    - 📄 nwt-tester.js
    - 📄 nwt-timer.js
    - 📄 nwt-tracer.js
    - 📄 nwt-utils.js
  - 📁 directives
    - 📄 v-draggable.js
    - 📄 v-resizable-simple.js
    - 📄 v-resizable.js
  - 📁 css
    - 📁 one-framework
      - 📄 one-framework.css
    - 📁 custom
      - 📄 custom.css
  - 📁 components
    - 📁 nwt-tester-ui
      - 📁 nwt-tester-viewer
        - 📄 nwt-tester-viewer.css
        - 📄 nwt-tester-viewer.html
        - 📄 nwt-tester-viewer.js
      - 📁 nwt-tester-node
        - 📄 nwt-tester-node.css
        - 📄 nwt-tester-node.html
        - 📄 nwt-tester-node.js
    - 📁 nwt-progress-bar-viewer
      - 📄 nwt-progress-bar-viewer.css
      - 📄 nwt-progress-bar-viewer.html
      - 📄 nwt-progress-bar-viewer.js
    - 📁 nwt-process-manager-viewer
      - 📄 nwt-process-manager-viewer.css
      - 📄 nwt-process-manager-viewer.html
      - 📄 nwt-process-manager-viewer.js
    - 📁 nwt-box-viewer
      - 📄 nwt-box-viewer.css
      - 📄 nwt-box-viewer.html
      - 📄 nwt-box-viewer.js
    - 📁 main-window
      - 📄 main-window.css
      - 📄 main-window.html
      - 📄 main-window.js
    - 📁 common-toasts
      - 📄 common-toasts.css
      - 📄 common-toasts.html
      - 📄 common-toasts.js
    - 📁 common-injections
      - 📄 common-injections.css
      - 📄 common-injections.html
      - 📄 common-injections.js
    - 📁 common-errors
      - 📄 common-errors.css
      - 📄 common-errors.html
      - 📄 common-errors.js
    - 📁 common-dialogs
      - 📄 common-dialogs.css
      - 📄 common-dialogs.html
      - 📄 common-dialogs.js
  - 📁 builder
    - 📄 build-docs.js
    - 📄 bundle.js
    - 📄 bundlelist.js
    - 📄 vuebundler.js
  - 📄 dist.css
  - 📄 dist.js
- 📁 .git
  - 📁 refs
    - 📁 tags
    - 📁 remotes
      - 📁 origin
        - 📄 HEAD
        - 📄 main
    - 📁 heads
      - 📄 main
  - 📁 objects
    - 📁 pack
      - 📄 pack-3f49e160d61f725090cb745d6f507d4b0fb56d93.idx
      - 📄 pack-3f49e160d61f725090cb745d6f507d4b0fb56d93.pack
    - 📁 info
    - 📁 ff
      - 📄 936bfed87a7becc17d21ba4176edd318078e47
      - 📄 b0972866dcfa593ba3e2600fb42263342b6d2b
    - 📁 fe
      - 📄 2082adb5ecc52553c8aa4fd9cd3f7f612f4a3e
      - 📄 34e0f77b8efc88effb8b11b27cdf7d217c74d0
      - 📄 74dc57e2ddd5e358d27747cb49b52f7a3fa418
    - 📁 fb
      - 📄 1fdb0572141a384516e839d6dcf95a6f21e21f
      - 📄 69607c4e83a0d91f9ffea06080455e6a14f201
      - 📄 7155e3b7b9e7f54452e46181748f4794e1b383
      - 📄 9ab23a59140199bf6d26c3026950aa7595a9a9
      - 📄 c4abab421ea68c0afae3f4410f457e989dd4fd
      - 📄 cc5c93a91c1cd3e084b7a22df14c82b5d9c023
      - 📄 f6257c70facb2e3fe94aaa7ddb8b9811cf23df
    - 📁 fa
      - 📄 53ac794ba3abd1abb1cb5217b4cf66f6a251f6
      - 📄 5bc51e9dce7a21dcf1ee31400340a5af8a5517
      - 📄 9930c851ab0128ea2b7f7e24b78b0552b760ac
    - 📁 f9
      - 📄 8630fca5d12c6dceb5e2f6bfbc699922c13b3a
      - 📄 a5d85276a2a4f00495e9f3590f47eda54766cd
      - 📄 ad38ab83b2f541c10890e6767382fb756f00ac
    - 📁 f8
      - 📄 58fea296502c2d7871ca28cbb8ddba70585d92
      - 📄 e525837ce0942ce23856d57616e3141bce2cf3
      - 📄 f1c4207fd1d17b6cb1da97b2c3f532cf3517cb
    - 📁 f7
      - 📄 97313271ad0bb123e529ab4054fa6f8c216785
    - 📁 f6
      - 📄 734b2cb556a24a80939a5d2c6cdb8551808cfb
    - 📁 f5
      - 📄 109d79aad6385369e257d63ed9a2489fd4860b
      - 📄 42135971cfd1651a752e0b75fa490951946c0e
      - 📄 4272214f24b8725bd689fcafba7eaa9b6b4f9c
      - 📄 8557b867358bc40e2844127fa1c7e62844b640
    - 📁 f4
      - 📄 63ff9bd53ed415e0a6afd0ae326f7caf44dc83
    - 📁 f2
      - 📄 160419a12494f72973d0c9d6c86189d788bcc6
    - 📁 f1
      - 📄 341528528e5d8bc558c431cd7365dbe1eac062
      - 📄 ddd506b5b5164e973778d4825b6fd1e085fa85
    - 📁 f0
      - 📄 2d5f9a2e77f7928bb82e587acddc979ae2a782
      - 📄 4aee707ac04bb64cd70a191d0a2b54c0aec039
      - 📄 4b1d96d2f3820e2c6c33171f296a76fe606e6a
      - 📄 67ec158f7e3c2d2225cd690562bc6e16012be3
      - 📄 c9408930c5b70b53adb2b5e82b9f24ff09db3a
    - 📁 ef
      - 📄 f9a5ea7623ff73db6697ab4a92544064600868
    - 📁 ee
      - 📄 08ea2a478618f98bed88d4ae81fbca1f454e19
      - 📄 09ac794de87e5f1b5098e775321a7ad281fde8
      - 📄 6f6b6f328c2af3fc6bfd4bea7cc555f70a7177
    - 📁 ed
      - 📄 990c4f81d7c3fff6a16edbe15d04d5fc906aab
    - 📁 ec
      - 📄 92e2bd8c4313adf3b02df4ba148a3b9e3254c0
      - 📄 baeb3488cec94c458f35cd618c0883d6e54361
    - 📁 ea
      - 📄 1ce1f5d5720fa4b8294fce85ad969876515da9
      - 📄 24937aca78e32e4302a480195d35cf2b1036a5
      - 📄 bfa189219df66261d251e9a2c3dbcf000bda08
    - 📁 e9
      - 📄 3bba3fc4b0c7ff8732bf61a966b89823837589
      - 📄 caa7c2dd914f633276a231f19d7e47bd657713
      - 📄 e80d5aed7a33b35527c66ad8b1c00a78bb03c5
    - 📁 e8
      - 📄 7dc2943c68219562108deb48e566a48543d84d
      - 📄 e4be8268be966aa504a719a9fa31129a011b89
      - 📄 ed26ba16bc870974a319285d5c5793573de34c
    - 📁 e7
      - 📄 773c4a0dd96cfedb9a64cc3ea7672c4f75035b
      - 📄 f137973ede2bf6447115298d28cb41d485aad1
    - 📁 e6
      - 📄 65ff001ea777d92fa130c31711d04ca9e9ee24
      - 📄 76d44bd5c85607915cbd139a3346a6d1d2123d
      - 📄 a46a27a5770f86c8c6176c362ca40a0919ade8
      - 📄 c363be9fe5885b6e05a50077dfa5fec1bde06f
    - 📁 e5
      - 📄 460e2623a21d726c48a3599cab4093d32f08b5
      - 📄 4874a29e4a6e0a50134881013508faab2ac43c
      - 📄 7d1051e3e52468c2d07e1ff2855cf4a984f858
      - 📄 8e50152a5b6bdb87b8b205ae5477d3c695109d
    - 📁 e3
      - 📄 37e62b3e223949fb79536c2e4a057a25dcfca0
      - 📄 6adf8d5dd75006e7bcbe4dea78712d551e6125
    - 📁 e2
      - 📄 fae4ccf0f5faefc9f05eddc4b8b07b475b8aa8
    - 📁 e1
      - 📄 68666a62fd037d98e4cd48eed26ba259d9906b
      - 📄 e7ed5c845b082f09fd904b1b4495d7d008c22a
    - 📁 e0
      - 📄 40db08d5a834c9a32fdcae4d69018c016b1ecf
      - 📄 61996e35161d7343d111c3dae8919d13422826
    - 📁 de
      - 📄 e57e3c33f80f9af6cb3ed9149ece011bcd7c0b
    - 📁 dd
      - 📄 2887b99363c61b8626be4d08a36d8bc3799b0e
      - 📄 41d21aa30f2e38b0e9dcee0ce97a2830b3e4d7
      - 📄 5c2f5eb52fb6540afe2f5a9a0d6e6afd07d344
      - 📄 60a2c4572cc91994b896dda6c7a916f4d6f3a5
    - 📁 dc
      - 📄 513b6aae8a6b5559d4c40f0d785686abd92c2e
    - 📁 db
      - 📄 250728937954b0dd1daaa586701e2619408fc8
      - 📄 b3b7040cba0974c1974e681472e54821046293
    - 📁 da
      - 📄 8772f96755532b292c200b0a9b42e457f56d1f
      - 📄 96e9822da8fd5f482608ab214a16b2dbac4b21
      - 📄 9aee6d7a73bd6ffe89709ceacda60d72d28c6f
    - 📁 d9
      - 📄 1b3524654d1b67dbb443ce91de01d8599a5f84
    - 📁 d8
      - 📄 3f29a36f11f433574eea6ef1f5cfd884e7ee8a
    - 📁 d7
      - 📄 777efb03a9a4e976fb7c59f5d3f34fc428bc20
      - 📄 7a45c8ababe3f51743f3e2766d00d9eb9f736e
    - 📁 d5
      - 📄 2420fde531ef653dc99efec0e121568063ec3c
      - 📄 57ffed6332c33697d97857d5fcf8bfe0820f42
      - 📄 5fb2c5671c80493c3e8744344335ef1b5bfaf5
      - 📄 9a37b081db0b99cd7cb61a5476f8120906b223
      - 📄 a702a54b2e75ba9dcf33016a104554fe010aad
      - 📄 c8f5bb848ebb585d2679bc4087528acbe2fcd0
      - 📄 d637b746baae1dc45d6ac04d2866634c85e81e
    - 📁 d4
      - 📄 9b5d5f7adc11da555250d1a717dabd0b0c11e2
    - 📁 d3
      - 📄 131c065700ebcc7f6c1faf87f6775e5d88cf12
      - 📄 354a3e8976716808164f46f26d4ed957151274
      - 📄 55139ae40144dac28fb96644c12275fdb99bec
    - 📁 d2
      - 📄 219e12b9fba3da3895f48c8ed4ba475dac3f8e
      - 📄 4bab7740ae37eec6a6eb3bbaf31a89d4e7e460
      - 📄 81b59317aa9677344fe75b6b576717ba013d59
      - 📄 e40a38f948fd5a19117f841adfbad0920a51ab
    - 📁 d1
      - 📄 5fb345f2e59b766880caa668ed43ee01678f98
    - 📁 d0
      - 📄 61f042a7dbc0a7548cc54e095ac5002b2e6df6
    - 📁 cf
      - 📄 24ac805e0849488c1fe807f2add2c39204a192
    - 📁 ce
      - 📄 0c435629f05fc691f63da3bc1cf62b1c5b46eb
      - 📄 10cd67375d2faa84e6c5ad41eb0f193e01c529
      - 📄 7b8d0e725e32840f99044781f789a8c35cec82
      - 📄 98661366fc613f0891f2c15ae7a5824dccf7a8
      - 📄 a9ff5f9a59bb49c000bc135965ee4ba5cfcd42
      - 📄 b14832add665b30a564461d149055fcf42dbde
    - 📁 cd
      - 📄 5977c1b49368ee428a219873863e5e515f1ed8
    - 📁 cc
      - 📄 10a7f152fb534d30bddb42e013cee5ad1e1d06
    - 📁 ca
      - 📄 ab7aa221a758438ee4351670f011f34d59a4b6
    - 📁 c9
      - 📄 1fba49401702f8dc84f08a4c97075ddb79c4ed
      - 📄 7297b76ecd52dff9ddb0af3de44876584b3947
      - 📄 c06d5cee856f281dc942628032c9edd821a6e1
    - 📁 c8
      - 📄 2c3c2045759a4e9780800b349d41e9cb3d62ce
      - 📄 bc565311e7779b45d96d7f0a5fd16d3f5519d5
      - 📄 cc201bb8a678213cb7e48415343d80067b1b48
      - 📄 dad4e85d42ccc22fbf82ac74f87f261a191d2e
    - 📁 c7
      - 📄 16ea938c0db694af7d12caddfdd341c114d4ca
    - 📁 c5
      - 📄 0b7b0ef54e30829744ab53872ddf22bc5ef171
    - 📁 c3
      - 📄 4d8a4245f397ea846977b033f73705f8545811
      - 📄 4f0ba9dfb3ace77ba3a1c4d30f150971ef7e17
      - 📄 6027dd9dbaf4a7e10091ca07fd3bf901e074f1
      - 📄 7108ff55aa43aa413cb0654f64e8ee8a8bd911
      - 📄 9a5873cbf7f23a236dbb5dd00c69da65deee66
    - 📁 c2
      - 📄 9fdbfca1923cce8c138a288188ea82297c0ccc
    - 📁 c1
      - 📄 6eae66f9cdcfb362d82f7e133e0d0b8ba766af
    - 📁 c0
      - 📄 ca69762495840421373b6eb9f84529e2dc4869
    - 📁 bf
      - 📄 9585ca3ce3488307b8188f377aafb4d4b318f9
      - 📄 d14e3d16caf9141326f650186d9d3d235e661e
    - 📁 be
      - 📄 3b2c435920a2c6bcb95e9abbcb831e15266404
      - 📄 c2657a0a4f1037c3aac7733b0276111661093c
      - 📄 e1cbec8f1d0ec1f8f5d21bd714f32ceae7ec9e
    - 📁 bd
      - 📄 4b1e92d874ce56ad82e65130c97fdae4b5dca0
      - 📄 93a4f193dbecdf9173366c3198f8471cffc23b
    - 📁 bc
      - 📄 01423f58d30aef59eebf8e697189f777f71479
      - 📄 048938aa959dc0f03af87a89b8270d438225c9
      - 📄 55164c7d707f52d1080722f551fde4c67b0e58
      - 📄 641abcbe6a2454d26cd4b29d595f519f47f3ee
    - 📁 bb
      - 📄 5f7e43f6ce32c101d8903788f01a89752229ab
      - 📄 ceb1b3b5cd01cdd2a4674efd13693be8fd6945
    - 📁 ba
      - 📄 334b7fb8d5c93c28b84f7f81c29a380fa474d7
      - 📄 3bb6f1e6cb1542c73152afa722bcfe5cf9d7ce
      - 📄 8d1d1ec02bab8086d62d73e56fb0e354ca925b
    - 📁 b9
      - 📄 952ce099ead68629297c538a3299c466635c79
      - 📄 b28d211cb020d27c751d626d4f98ebe73498b1
      - 📄 cccb7a71f8d23ba653ab891d9ab27519a390ba
    - 📁 b8
      - 📄 0fb86883061f69a8f8749724e8f981aee10fa4
    - 📁 b7
      - 📄 e6944f9d22c466869537cab43eee66dd301950
    - 📁 b6
      - 📄 1a24d6fb429b0041b9aa164ab00bf9153c5d06
      - 📄 3e4e383bc7922acc7a3fa51edf0351111bef5b
      - 📄 57fbe94aeeb12e0d9637c80afbd5faeebe003a
    - 📁 b4
      - 📄 2d2fddd752ccc6f47263cd0166d3b570562be6
      - 📄 d65aa7bd0c641530fd86a17daff01b05ef1c8c
    - 📁 b3
      - 📄 e8afa204498256a24605766ba3a11123ccc85f
      - 📄 f73f998e487e5e08e0147584fd0378d03f1946
    - 📁 b1
      - 📄 b0556165d155f7d593bb7c98709f0fd6594969
      - 📄 ee6c09ed21f20c8213beb893e9393cd7169b5a
    - 📁 ad
      - 📄 021810da95b04ebef59cfe8af129cdc2d765df
      - 📄 2c4572f85cf0f86bd22c00a0c1ddfd1ec5b3b4
      - 📄 bc5966cc12e5ca40516f1c53e37f1e5b5b919b
    - 📁 ac
      - 📄 e1294a97a56e97d6cc29c8e3ce1a87a37ebfd8
    - 📁 ab
      - 📄 2b1879fc34328fcac12a03c41787582280b65e
    - 📁 aa
      - 📄 8f6156bb3d966fb3498fd6f88fca8dd128bcb0
    - 📁 a9
      - 📄 58c789a77c0062a7e4d0fb353ae354b574b367
      - 📄 60c1995013d78b7529f92b01902505d829a2fa
      - 📄 8ba9981a00e239ab3ba842711cc37b12578d71
      - 📄 eeae23d9263d6810c20bb99ec5a60d8792b8a6
    - 📁 a8
      - 📄 3a8629a43c5d1870b2d96f2e73bf343b6074db
      - 📄 79e8310d7f035af97a213bfbbdf63b4c4560eb
      - 📄 d617ceae02b7704293a4e72ee95ae29dfff561
    - 📁 a7
      - 📄 8c2ba758f76a5591cfc0d948917903649f82aa
    - 📁 a6
      - 📄 8ee817bc8084265c3903f0d142134dfe837a4c
    - 📁 a5
      - 📄 68a67573c6021f15b77294de3188dd6fb0c054
      - 📄 69eada2ac92b0ec07d42ed3fcb7d8c3a563af8
      - 📄 7eb3d9cf4fe7bdfa492fb568421c7ab4a48c81
      - 📄 d847323898db9815089dfd550a738165a9994c
    - 📁 a4
      - 📄 9fda48555c452d497f5a936ed70f8221e6c3a9
      - 📄 a4fe094d15bf9f35fb6329dbfd0c365a8371ed
      - 📄 d1842cac51d6b2e9c898838bf92de1e5ac6442
      - 📄 e618e8e8331f5d42e99118e22ecf63686f2c47
    - 📁 a3
      - 📄 b2b0bbc6db60da6ebb6de70d9f80f7436ed4fe
    - 📁 a2
      - 📄 3be119c321f4979d8804168a0bc9bd6fa8e49d
      - 📄 dfaf498a390594b9f17b0bb1b468aea955a457
    - 📁 a1
      - 📄 3a8c704927806a721ff6abcee281fb98c557ec
    - 📁 a0
      - 📄 3fd54e66d8982fc239d9ddd2074fb02cebc7cd
      - 📄 8434e362ae1e4f3b31dc3bcb4dc7c661143160
      - 📄 f6a084bc5fe378347491ed223d3d7a51fc4c07
    - 📁 9f
      - 📄 583c983ab565a0d60b193b5facd7ad3fe70eb1
      - 📄 83578d59ae637dbdef308b14dbb0e0832ee6ad
      - 📄 9af7a602202630d0cf54b227335d8817a5a461
      - 📄 cd1bf26eaf8c1a88a8dfc0fa31289206e4cbb7
    - 📁 9d
      - 📄 a67abd4015cab4cb099055859da1351f47ae76
    - 📁 9c
      - 📄 6728f03ddbc7cf5596f459abe95d9c8e1e5e3c
    - 📁 9a
      - 📄 1c934b31e3acd85f3391856b007cf25d8ad2d7
      - 📄 9d7336c091f2e188254193f492f4ad9c8bd31c
      - 📄 a1c092454cf6d5a03a296037333b5d20cbb8be
      - 📄 c011cff0a8b576ecf9f43d976b2b9879df24af
    - 📁 99
      - 📄 575a7f8ce711995c2308fa136e461ce44d69d8
      - 📄 89ec5799ffde6c18e658bbb60a732740b0045c
    - 📁 98
      - 📄 3a77660240e9379548dfda18a4f1751b3b92ec
      - 📄 73843e3d1a3d9712c4299916968398ce03c1aa
      - 📄 9af547b45ed9b9bd0ee9312230ce3a2ad6d3d5
      - 📄 a5c7dc265614b821825a898a924738a1feb9cc
    - 📁 96
      - 📄 07cf2b31b3afa6b94fd9ff4c0de6073502ec94
      - 📄 289b562d3dd2ce30e191a64c3c89ce26b03912
      - 📄 76cb1fce0ca2e80109fcc8edf0f60e89e2e21c
    - 📁 95
      - 📄 5ecbd798066cfa05bb43ea12f193087a374d54
      - 📄 659acbaa84ac35704859970d66c0a6be5822f7
      - 📄 7911262ae133b9a6bd815bb74aa507b9ca3e5d
      - 📄 97c05dc4222988db3a153e3dbe0bb0c618bc83
      - 📄 b41ecbc856929e2c846f0f342cb13682eae40e
    - 📁 94
      - 📄 9ed896e768c62e6dd57ca402b0661e0d52eb39
    - 📁 92
      - 📄 c666a4456c20450282528b54f582d5172dc4bb
    - 📁 91
      - 📄 1a6df1056d7b6a95cf64bfa9c37dd7602da41e
      - 📄 2f085c11aea5b9941675369aee1053829d2bb7
      - 📄 9a8f47fbe6022160ea0bcf5f219b10e69fb3d7
      - 📄 d4262c4e923c4285843fe3142aaeb6823a017a
    - 📁 90
      - 📄 0960a59ba8fa49488bfd89a7c1578ed4d81f4b
    - 📁 8f
      - 📄 0935cb6a1a320725f17662a11894319cc82e52
      - 📄 110c72eb2f040dcdc12844ff089d893f0ae2b4
      - 📄 76ae57fa21904b14d9dd5bc9e00eafeb5d00b6
      - 📄 9a944c2f0434722323203f8b5cf4f4ea892916
      - 📄 d3810527517f1f59c5ff77e09f999ce955974c
    - 📁 8e
      - 📄 119cacc074db9923c009a53919b570205ad33a
      - 📄 98141e8ff8f08f496c50b291846258643712c3
    - 📁 8b
      - 📄 47ffe268220ce3d7dfa612e67b8ef3fb8713c8
      - 📄 a5cad8c639b0a7b99043a5693b871bd70b84d2
      - 📄 affad8a1ba051d936e465bd61a249edc2a68aa
      - 📄 d38d2e58ce4c26beeb4386f03899ddbd67be5a
    - 📁 89
      - 📄 b81946d964da0eee0f75711b7ac2f5a8838f28
    - 📁 88
      - 📄 61ab3b8c9662af72224cedc3b90b9647b7d818
      - 📄 79cc39e89392e333fadb2f9424ecd3db29d578
    - 📁 87
      - 📄 f9e7173442e0dd8ba79543b2cfdd253fbabe48
    - 📁 86
      - 📄 3c92fed20c9a9255b71e57c87817b6b8d8939c
      - 📄 56d2e41cffb6faa05b38ba0175784d5367af43
      - 📄 c68103a72c7f7ab14293c128286c7a1f8ef41d
    - 📁 85
      - 📄 6f9cbcc83c1ba18455f749871e18c9f8a3c72a
    - 📁 84
      - 📄 156db84dd24f78e0921da162cf96af97c28e83
      - 📄 311cf40aea3ec22b1e174f6db8f0d391790708
      - 📄 b40ba4ff06c1e437def449e20476566ba65dd7
      - 📄 be7ce1cc8ec3731560512170d307bfbd94c224
    - 📁 83
      - 📄 9f1f325fedc9f4aafdf80f53ae26666e9f1599
      - 📄 e2819a6f07c4973f76c5732010b4508eaae17c
    - 📁 82
      - 📄 21f2fb8f4aafbe6c0f4ff91372ffe9ac35bf09
      - 📄 34240d3c0158945abbde340e0b6c905e4a7d01
    - 📁 81
      - 📄 7d2a275ae806d56906bf0d34eb6f6c5ebdd04b
      - 📄 c5bb52aaa776150b1058dd170390956d04dfaa
      - 📄 e5cd9a406ea28c9623f9b220641fef08f934a0
      - 📄 f0a4aa5249f88ef50d476762c538875ffd23b2
    - 📁 7f
      - 📄 51fa9680df0dc2815d11ec6630f8cda9cecd07
      - 📄 bd39784606768f7126f2b28612f74a40af94a7
    - 📁 7e
      - 📄 4bcae51cb5556fcc693e8391659ccf1d91b154
    - 📁 7d
      - 📄 46e77d83979d5439e847c676196621f218e6ba
      - 📄 5a8e16642c80590a7c66ec82723bc08751dadc
    - 📁 7c
      - 📄 bcd9b25327de755d6a4566c9b3eed2b194465a
    - 📁 79
      - 📄 bfd429dae230d9852e96ebaa6e2fdf753ad800
      - 📄 c7dcc86054722421da74a6f70cc8d38cef9ed8
      - 📄 d96951d3e3c774230c25e8d01bed61f6ef3f88
    - 📁 78
      - 📄 67d0f5518dc22e54384cdeee00a0efa52e2578
    - 📁 76
      - 📄 e086fecf0f08a9234116e52be41ab7dbb5cbed
    - 📁 75
      - 📄 9674c451b4167957ec31d61b8793d411dbdc47
    - 📁 74
      - 📄 6509766c7508f9ad59ec0f8b8dbb3b1bec2854
      - 📄 a1c814132399c56eba3ff998d34e1e2175a0af
    - 📁 73
      - 📄 3ef852fb69d6b338aa06ac875aad2fe3138480
      - 📄 8f57c8665220ae3053e5a5b339424a953f7272
      - 📄 e80b31a0c24380d719167feefe4289cf4fcf0d
    - 📁 72
      - 📄 1628c740070ff8cdb95a48dde3de3c9b7fdf55
    - 📁 71
      - 📄 11987a8fac573c839a63229d3038ae80599325
      - 📄 3f2b6ccb5369ffb7b5de86a0678f2a92e130fe
      - 📄 82af01e54d86f98114db4e6d004f32dfb3c169
    - 📁 70
      - 📄 0dbb3afbc8e8d03c1f80d181b0184f6214eeec
      - 📄 5795de459def93272fe6f133df74567384b5e0
    - 📁 6e
      - 📄 9637623a7aa60a9283436959668f8e2ad9e24b
      - 📄 bfb0c4393213a2ce6be6c2d07c977b3a2acab6
      - 📄 ce5a573920b7fc1059897accce8f7c060159e3
    - 📁 6d
      - 📄 2d0e391ea1f9232469552c4712e2b53134a71c
      - 📄 714c7805f8894c9712d0f87772d87c62c5c59d
      - 📄 89514b67a720bdefb9ec3f29d8d07c999c3e96
      - 📄 abc2b53e26f30f4fcd61114051fc98fd7c43fb
    - 📁 6c
      - 📄 4fc0d7f007d0bb8fb659509bc82a8c8acb52b8
    - 📁 6b
      - 📄 94f63c9aeebfeeb1b3ff14bd3bec4483c52d5d
    - 📁 6a
      - 📄 169580ad26ca921ccded775df47f8627d6d1cc
      - 📄 fb47169a5e608d456e0fadadeca994f34b5add
    - 📁 69
      - 📄 0337268d2a8d54c45871de99ed0a68a425a667
      - 📄 78f050be3c10586a416540e43bfe1d196b0b50
    - 📁 68
      - 📄 deaee2b3802f21fd90880517968cfe8662af73
    - 📁 67
      - 📄 ce26578bc1d62eba58b568d62479ea4ea2becb
      - 📄 e281ad559e1c26ad284faa813b29cd1b5eb326
    - 📁 66
      - 📄 44009521112a893b28a84f9a9c443c81a098c5
      - 📄 7b88da39a02ee8ab3fcc21f0a9ac261a71b064
      - 📄 dc25cfc3c0655ed675909195bc228f233e5b18
    - 📁 65
      - 📄 01635b20e8f4ef34bbc8cf33e1f433849eb786
      - 📄 5397953da01a0952e4d7bde2ac9f5f98eab682
      - 📄 ccd9167e79183945604533f38b3dcd483365f4
    - 📁 64
      - 📄 49da4f16cb088040d7cd46785deb1c9ef2397a
      - 📄 b1eca224e12fd2fbbb42b08c8273a96300fe1c
    - 📁 63
      - 📄 3d00db8173ec6707faac27a6186c45ba7dbe59
      - 📄 52f189d03f03bd1ffb402f056f488088d069c3
      - 📄 ca7811a48691202481a1f632e37db25b82a6b5
    - 📁 62
      - 📄 15d89186c777eb11b58cde97a2bd2c99e758ff
      - 📄 6983edf142f8a15060835869b8ee18d9d18698
      - 📄 a835e5bcb6b449ed4c34a08aa8080287ad1c91
    - 📁 60
      - 📄 f34033a8b19af2974f5b42f226e72f04cdc191
      - 📄 f9b4d5b6cc873e1048dc84de4ad64d5bd0ee3f
    - 📁 5f
      - 📄 85bfcc5694d6954d25670b933dc01875d2f157
    - 📁 5e
      - 📄 cd2466a6bbd05d5788feb2e163cf017b4be692
    - 📁 5d
      - 📄 25dd8eefa6f136144defb84d50588ceca9484a
      - 📄 52a7828f4b355cb2e808d4c253f8bf83487524
      - 📄 9ab7f114f3ce3ceb0c30f19fcaed91e77eb0e2
      - 📄 d86f77c008bcc54d80566597427aa58f8f7f28
      - 📄 f359291ed6c83ff312bc5e8c5bede6cfb6f66d
    - 📁 5c
      - 📄 f6cecdd9c029394701548002d656413fa8e59e
    - 📁 5b
      - 📄 15a3b8b01838109210c65af71c35b8769733d5
      - 📄 539fdf9a7ea325127f9e7904be5d9c9cbcdf69
      - 📄 58ef745f6359a4305bc17ac81857004378f8a5
    - 📁 5a
      - 📄 0f2657ae5979f1ce70425db8527728a90456d5
      - 📄 123a53e895f5ef32728f81a52ff6ae3174b8f7
      - 📄 d0b9433040e7eed6bba3b09a271145e3bd4f8d
    - 📁 59
      - 📄 478bdc722ae4632d77503e617c44d7ef0de976
    - 📁 58
      - 📄 03a6ee06fbec120ea73ea297631daaab58b0a9
      - 📄 548d920687234b7df703a90b31eefb933cdbe5
      - 📄 cdd976dfa80ca2b5b4ec3f8437b8a522578982
    - 📁 57
      - 📄 5f67bffa225b6d6ec9e3979d268e7277038405
      - 📄 9eb9b5f0f4cbc953c28cacc93b55f326b542b4
    - 📁 55
      - 📄 22a28d03c11f1bbf1fa8ed9355da78bae3f2a6
      - 📄 505836aef10395ef34d0722f3a07cf2dbe0fcd
    - 📁 54
      - 📄 4ddd7779aed738b1737d006b4a795a4686b253
      - 📄 65663a61abaaaf62ac22a7e255e0b3805c687b
      - 📄 889e6399fb46bd3171afafc2e67a8312c216d7
      - 📄 96466f2dee3556c254663ca68270d2f191586b
      - 📄 cd6871e53e5514fb824cbdd8cf41f143a87823
    - 📁 53
      - 📄 19a73d1289cc23c8890d1051014d6d19fd9e6a
    - 📁 51
      - 📄 01e2f7f850d1d443480b96d3a17bbfa378460f
      - 📄 1b1b5eca411b96563045ca8f33f9d5012a2cad
      - 📄 e43fe8805f1e072eb32a2b400d0b879d5bb04b
    - 📁 50
      - 📄 2410a9268218de9bdd0930a239796197d6f56a
      - 📄 a2eb9ee7d55696fbf565301cfdba2a40fd39ac
      - 📄 b48b722cbb51dd89c8c8fb3e28ae32f554d8da
      - 📄 c39b7135991784fc6c732674473cfb5dffda22
    - 📁 4f
      - 📄 13ede2c738ffb21f0ddfb6add4f05ff91db685
      - 📄 4b2899bc0a233e3bc4f658e3c3ab2857966d8e
      - 📄 6bf7a4f5336eb7ecbbaa3c38209b889b2020e9
      - 📄 aef46edd9891269330252fb88dc10381c8876b
    - 📁 4e
      - 📄 3ce62035d59e5dc1ab5f9b85c6b77dcae7e8cc
      - 📄 b0ccf348c243be9409ce057f00fa0fb940eb6b
      - 📄 d61cc30da1665bf8af2520fff2ed71ba93d534
      - 📄 f9c760d081feaee16fcf3228498b538c1cb7a6
    - 📁 4d
      - 📄 31fe9645db58ff975a39f7d360274622df757e
      - 📄 7ed03421400a43c8de3c5581a8042117f5a464
    - 📁 4b
      - 📄 6f781998c1636229bd1ae54b82750787b903d4
      - 📄 76cf954c4cc462435b96b5d99cd9e456c41725
      - 📄 7c7f7476ff5e2acd3ed34e18a3eb72acb0aeeb
      - 📄 a5eb48152d0da7bc46efaa6e8cd473edb5e193
    - 📁 4a
      - 📄 96dd57d257dc12277976efcab9a3730d4f6908
      - 📄 eb05f77ec68dce2651711bd53b9979bebabf1b
      - 📄 fffbc76a1782272a7206721762fa7dcf300da4
    - 📁 49
      - 📄 9ff9c07699be6e6c98ec06ab12171719ea8fcf
    - 📁 48
      - 📄 ae83ae76d732b679f1c65a8f367f7807c2ec20
    - 📁 47
      - 📄 0f1253ea396b5edacea330ec95dd2a5d91a249
      - 📄 79893dfdedc5220e24a2c8138625d747443a58
      - 📄 a01a0862305830eddb56c1c87064f7c155be6c
    - 📁 46
      - 📄 0b98ce4dea3abb8bc8dd706eafa36554061429
      - 📄 0e0e58227234eef7ee72876f13b7fec65198c0
      - 📄 255bb9f9605612908e128c6185f1d113a4b10b
      - 📄 ea4a84ffe0b0f4400d4444d7e519abaeee7a03
    - 📁 45
      - 📄 9f5c70e4a4bf6ab68903da9c9e28aa1b2cf54a
      - 📄 ef72c76f1d549b61ee10acb85044e99a8fe81b
    - 📁 43
      - 📄 112cdd258fa0d03a947e4eb8e601e402a33bfc
      - 📄 b8c855fb9f29160142de9d4d168a6a60923ff9
    - 📁 42
      - 📄 2c32b5a9c1c020f5fa526ca0afd1e33670fbe2
      - 📄 862190d3fcc50d7e274edd2662f1e1f2aa7bb8
      - 📄 b1f13f3bb746066d0d838c6d40ccede61bfc29
    - 📁 41
      - 📄 c7ad4cc983bc79daeacedb8c8da8ba2e0fe2de
    - 📁 40
      - 📄 528ce1cde6b3d822e9db890f74fe8403e401f4
      - 📄 8db437edfa991865ca34e8c921a630f8196abc
    - 📁 3f
      - 📄 62c593f42b7e1bafefe254b06221dc0ae56417
      - 📄 b42f7b54793b2ab87c3d038d7135135a7894c9
    - 📁 3e
      - 📄 a6d131c90186eb1ec275162ab15c687d803dd9
    - 📁 3d
      - 📄 085545ed76bad5c7fdd1f7833b42e530e030fc
      - 📄 4a7a1f1c0bfbd901987f26f449ba5e6924c64b
      - 📄 7279e6a0b1eae46c37106d8c0ed1b222433a2f
    - 📁 3b
      - 📄 4b5cec8f1afeb06accd53ac39e083f4a2810d4
    - 📁 3a
      - 📄 4ffff729156c50cfec1a8093c40fd4cccd2d8c
      - 📄 8b5fd092288fc6d7051eba174eb370a8d08d46
      - 📄 9f5307a8be8b08adde09d6f0daab690bd9138a
      - 📄 ed459b484cfb562e53505b97c8fd8d09721f00
    - 📁 38
      - 📄 1a840283d2f3b89d78722571712c67306067ba
      - 📄 3f339d0475a257a4bc264c890555306c0aa2d3
      - 📄 70ff0742708be0a98e93a2b1cdb2c7c58bc133
    - 📁 37
      - 📄 4c5e078b7c506aa00626dee07e31bf0743f860
    - 📁 36
      - 📄 557c746e9caa7050275a6b29ecff674a98651a
    - 📁 34
      - 📄 5792e33ae73ce25665eefd8507a40c73affc0d
    - 📁 33
      - 📄 37116b4d6cc56c0d32b55fff0e983659f3950d
      - 📄 82f0502c52b7aa5cc2c26a8c9cd860c005ccb3
      - 📄 8d5793bfe6683fe3bd545edcc2e4c58b59c7a3
      - 📄 8e80602e152c8af1888203e4afd2e130aa3a4d
    - 📁 31
      - 📄 448b40f0dcfd2e1a264e1da7343409470d8fa4
    - 📁 30
      - 📄 414b9e284ee68d5a73c6e6f575126dc4861d6f
      - 📄 6f768025909d261f777baa05102b8a709cc48e
      - 📄 a90520cbc88ec5fd8079243e31b369cd5d50ce
    - 📁 2f
      - 📄 a8203ff2f7b4c35d9bb957f16515dc0a48d2aa
      - 📄 a83497545ff40bf0b6951952c8315cd39154d3
      - 📄 be7556be55a4eb089958afa58c57e694a21006
    - 📁 2e
      - 📄 84086a3d53a586ee6a6faf971e1a3575f26b02
      - 📄 b15387fb17a2c029b53580835d539ece20243b
      - 📄 ea7ce4ef629907bde5abc7c9241cf559bba787
    - 📁 2d
      - 📄 3984b57d38c20550c44f9f0dc3164332c2e22f
      - 📄 85f977ef3a478ef86a883e5f73d26620045bc1
      - 📄 b643c8f0d6becfa534549835b5ca4e8f8ae983
      - 📄 c2b4047b5047318226fbfc93e15bad2bc114f6
    - 📁 2c
      - 📄 8785f203c239568e62b6694fcb3c93a78b9dec
      - 📄 a5c28a16514ea91e83e5b189cdae6ec14ac133
    - 📁 2b
      - 📄 21bac8516e9c5bfb4a5ecec3130e45514b051d
      - 📄 3cf8120d95a99ea7251eac4a25a03d415f6635
      - 📄 bc60e70529adec5d037330ecb8261d7278316f
    - 📁 2a
      - 📄 6f9e1a69eb1722986b78997f774c065c02302b
      - 📄 706ecd3bd9030887a16b5eee0effac94325705
      - 📄 8af38ae60e2634940614ca6b044b77a111ae39
      - 📄 f12cfcd43cc2cc6407e8553769703df4a85512
    - 📁 29
      - 📄 e36970478ffeff42ba5bfa057217890ea27abb
      - 📄 e41df9361912b485192be4c81790f7646b04d6
    - 📁 28
      - 📄 39c9e2a48677071ca937b3c1e01936bcbad0cd
      - 📄 c7b96fe264b773651d69cc888d3834e2a0cbee
      - 📄 e1bcc53b0922140c9548227c69a0827c77cb63
    - 📁 26
      - 📄 15a675837743b6aa0992919b01365e8288f046
      - 📄 5a5f9839cfe610d1a094258031f65fe4f90a2b
      - 📄 ec0a11a9e970fa37f325aae8e668ae788547ea
    - 📁 25
      - 📄 a0740aea4b850d217db11e3e20fc9a2571d01e
      - 📄 f9e57049abcd014443191eca77d03beec7ece5
    - 📁 24
      - 📄 c27892a93d4c945c12b95a8fc41156023cb5b8
    - 📁 23
      - 📄 1539e028b6f407514d449d23cd8840e5819229
      - 📄 5ff3278d0a4b8b33b3f96eb9502d672b90aa5a
    - 📁 22
      - 📄 cc5c657fa9cd8d802409d95b79a08a92ae54c2
      - 📄 eef82b1268c4b454e906d885e2d8960fe80b7c
    - 📁 20
      - 📄 1be142c45ab13908190b52f944e4aa7425cd02
      - 📄 2ba2c70548fe0203c77503508f867194a34016
      - 📄 4ace2cbe82807617c03cc94837f2474d30f76a
      - 📄 624ea8046b0c59689304a966e80eb182276e38
      - 📄 677d4738d7fa2b95bf89c3c060a6fc6ff6c26a
      - 📄 c1859a38ee4508cc111938511f6b83310f7471
    - 📁 1e
      - 📄 57f4747b6a4f0ce53c7d307f2d6e0d11ec1843
      - 📄 e910570084373df8c5b20300593df6107be3be
    - 📁 1d
      - 📄 7cf3e85e840b7553b111304871b033fdcddf6c
      - 📄 98fd179cf647798b6ab8555dcfdbdd0ca2cba6
      - 📄 b5aa89955380dcec98f76794fe5e16637e1df3
    - 📁 1c
      - 📄 b0886c532a88d8a3986f135c17ef6ceea8ba5d
    - 📁 1b
      - 📄 803376cfc86a5b99f0aef83a0b636418034ed5
      - 📄 aea638b23f4a2fcfa1fa0502ebe2b404e27823
      - 📄 e12269e69de82f3cb3a624031c4b78eac41762
    - 📁 1a
      - 📄 df476c81e316b89a8915e668f61ea8f46e5ce2
    - 📁 19
      - 📄 69533e35bdc636ac3bb1cf9ee8831ecd5041d9
    - 📁 18
      - 📄 c3bd83c1bdfe55dca7fc116b3153fde4703eac
      - 📄 d2bec58a84b9c719a6dcaf24de620a616a48fe
    - 📁 17
      - 📄 553428c09269fba5b75ea9323fdc3254170e99
      - 📄 965d95a68ef8d089991b742d9461f0830c5556
    - 📁 16
      - 📄 8bc4c069dadee86d4d479da4eed3fd4865f12f
      - 📄 e6f50a9c664d127d4adf145ede54dcaeb8afbd
    - 📁 15
      - 📄 8731074c4e184340c74f6dca3dbdc21c681584
    - 📁 13
      - 📄 9597f9cb07c5d48bed18984ec4747f4b4f3438
    - 📁 12
      - 📄 822b56e30db57d504acbd5432d8430575d78b4
      - 📄 9c581355bef02a2d4df9d214e1193b341a5edb
    - 📁 10
      - 📄 370fc09db17bc081ed8995b19951368a27b9ba
      - 📄 bad0750052ea341af267eae17922df31d1abfe
    - 📁 0f
      - 📄 ea4319edc74080017fe4783a88844d1a9b774e
    - 📁 0e
      - 📄 72960125a752c8aeb2b2ef062e7c6fec50232b
      - 📄 901c527f253df04bd9748a91157021f3526853
      - 📄 a1b039d4c53c54f6099901195085e9459fc2b4
    - 📁 0d
      - 📄 abc115314575f123f0c2afdedcc9eb63a97e55
      - 📄 e921aba255f3823ede7e68d0c64e314bd64505
    - 📁 0b
      - 📄 99dddabf1981c2ac4b4836525ecca926534080
      - 📄 f6a6fc33a4d7df94ed9d3875c2cdabc54cb596
    - 📁 0a
      - 📄 14c84fe6a06f2173a3ae61700e80044122dfcd
    - 📁 08
      - 📄 1ce6b7423a97e6c2874d48b020bfc5a7413587
      - 📄 421b48cb52506242526917da083d91b35d0a0a
      - 📄 6d3c24f28008f535f4b236c38935dfa98b5aec
    - 📁 07
      - 📄 12930f057c6a25177ef9e9b151c617e64b8ed5
      - 📄 328fb6c67095ebceb3a6e15353ef7fb2b946e5
      - 📄 47af82ecd72e908ddc61017bf168be659ec45e
      - 📄 8c2377f402826029852fedd81e96e33ee6f193
      - 📄 cb4547ea525fd33cbb95922d46aa55be9a53d4
    - 📁 06
      - 📄 010e3b1937db1cf3e82c81ce8a666c7ba45be1
      - 📄 12749d4ae55180da3fd14022d148ea91d68627
      - 📄 4d2ffe359375efade19f84bd80957758081751
      - 📄 a5c7bfc4930e8d79c45b5bd32ef0d87a2473a8
      - 📄 d57026a18c14a34361ab6d8c300d7a39ac071b
    - 📁 05
      - 📄 12b00906d6dcae894f16810c90dff2ab11255a
      - 📄 4cb6fa5a81c7b878b0b414d0a9c7765ab1c06b
      - 📄 a10d19779219d7e0a04f7fa4e5925a312bd799
      - 📄 b441f9171c05b21bfd8bf5a22b7da7b586ca86
      - 📄 f12821f1eb74aa517d1d16f28a101cca6c0833
      - 📄 f35dd09ef99b89c87991c91c114c9842733f7b
    - 📁 04
      - 📄 68d41140559521a145d65e89e5d8650692f07c
      - 📄 a98184863fbf7dac91c99b085bf04518c4f425
      - 📄 b9a5ccdd4e823a9c430411e53e1c349469ddde
    - 📁 03
      - 📄 08fc5e20981ade7b0ee26660cf0854817b1bdf
      - 📄 b58954f5c462146877ed3721274103bc58e625
      - 📄 bba48ec5238a337796a1c9a0ad5ad559f0021e
      - 📄 e3659c0eae612f38810c34c9bb582a83e76d20
    - 📁 02
      - 📄 232243c662f232f3fee93f7782175c93af5a3f
      - 📄 925a66635f76efa242f1b379b34507db584912
      - 📄 d16659f62da3a5ffb69df226df1fdc8c81ecc5
    - 📁 01
      - 📄 137e89d3a6db376950a7ef92fe4cd000e36cfc
      - 📄 5efee2c0bb59a96cbe246ef5b4c7fb77c497b6
    - 📁 00
      - 📄 06cf4baa9cc687ccb2a6b481ff747727f6758c
      - 📄 dd26f548e66415e562abccbf4a1904560f85b6
  - 📁 logs
    - 📁 refs
      - 📁 remotes
        - 📁 origin
          - 📄 HEAD
          - 📄 main
      - 📁 heads
        - 📄 main
    - 📄 HEAD
  - 📁 info
    - 📄 exclude
  - 📁 hooks
    - 📄 applypatch-msg.sample
    - 📄 commit-msg.sample
    - 📄 fsmonitor-watchman.sample
    - 📄 post-update.sample
    - 📄 pre-applypatch.sample
    - 📄 pre-commit.sample
    - 📄 pre-merge-commit.sample
    - 📄 pre-push.sample
    - 📄 pre-rebase.sample
    - 📄 pre-receive.sample
    - 📄 prepare-commit-msg.sample
    - 📄 push-to-checkout.sample
    - 📄 update.sample
  - 📁 branches
  - 📄 COMMIT_EDITMSG
  - 📄 HEAD
  - 📄 config
  - 📄 description
  - 📄 index
  - 📄 packed-refs
- 📄 .gitignore
- 📄 README.md
- 📄 TODO.md
- 📄 index.html
- 📄 package-lock.json
- 📄 package.json






# Nwt Dialogs API

## Exposición

Está expuesta en las globales:

```js
CommonDialogs
NwtDialogs
NwtFramework.Dialogs
Vue.prototype.$nwt.Dialogs
Vue.prototype.$dialogs
```

## Crear un diálogo con formulario y extraer la respuesta

```js
const respuesta = await CommonDialogs.open({
  title: "Formulario simple",
  template: `
    <div>
      <input type="text" v-model="user" />
      <input type="password" v-model="password" />
      <hr/>
      <button v-on:click="() => accept({ user, password })">Aceptar</button>
      <button v-on:click="cancel">Cancelar</button>
    </div>
  `,
  factory: {
    data: {
      user: "",
      password: "",
    }
  }
});
```

Este componente, que se inyecta en el root de la aplicación, inyecta un evento para CTRL+SUPR que muestra un `NwtProcessManagerViewer` mediante un diálogo.





# Nwt Toasts API

Está expuesta en las globales:

```js
CommonToasts
NwtToasts
NwtFramework.Toasts
Vue.prototype.$nwt.Toasts
Vue.prototype.$toasts
```

## Mostrar un mensaje emergente:

```js
CommonToasts.show({
  title: "Titulo",
  template: "<div>Aquí va HTML</div>",
  footer: "Pie de templateo opcional",
  timeout: 5000,
});
```





# Nwt Errors API

## Exposición

Está expuesta en las globales:

```js
CommonErrors
NwtErrors
NwtFramework.Errors
Vue.prototype.$nwt.Errors
Vue.prototype.$errors
```

## Mostrar un error

```js
CommonErrors.showError(new Error("Cualquier cosa"));
```

## Captura automática de aserciones globales

El componente hace:

```js
assertion.setErrorCallback(error => this.showError(error))
```

Esto implica que las aserciones globales mostrarán su error en este widget.

# Nwt Asserter API

API para aserciones y comprobaciones de test a nivel más elemental.

## Exposición

Se expone a través de:

```js
NwtAsserter
NwtAsserter.global // instancia
assertion // instancia
NwtAsserter.global === assertion
```

## Ventajas

Se usa así:

```js
assertion(1 === 2, "1 must equal 1");
```

Para personalizar el gestor de errores y aciertos:

```js
assertion.setErrorCallback(error => {
  // Do something with the AssertionError
});
assertion.setSuccessCallback(errorMessage => {
  // Do something with the success and the non-thrown error message
});
```

Puedes crear un nuevo assertion así:

```js
const otherAssertion = NwtAsserter.createAssertionFunction((message) => {
  console.log("[*] Assertion succeded: " + message);
}, error => {
  console.log("[!] Assertion failed: " + error.message);
});
otherAssertion(true, "Assertion 1");
otherAssertion(true, "Assertion 2");
otherAssertion(false, "Assertion 3");
```

# Nwt Globalizer API

API para globalizar variables en todos los entornos.

## Exposición

La API se expone a través de:

```js
NwtGlobalizer
NwtFramework.Globalizer
Vue.prototype.$nwt.Globalizer
```

## Ventajas

La API permite algunas cosas como:

```js
NwtGlobalizer.exportTo("NombreDeGlobal", {});
```

# Nwt Importer API

API para importar scripts y estilos.

## Exposición

Se expone a través de:

```js
NwtImporter
```

## Ventajas

Puede usarse así:

```js
await NwtImporter.scriptSrc("https://domain.com/script.js");
await NwtImporter.linkStylesheet("https://domain.com/styles.css");
```

# Nwt Randomizer API

API para gestionar aleatoriedad.

## Exposición

La API se expone a través de:

```js
NwtRandomizer
NwtFramework.Randomizer
Vue.prototype.$nwt.Randomizer
```

## Ventajas

Permite algunas cosas como:

```js
NwtRandomizer.fromNumbers(0,10);
NwtRandomizer.fromList([0,1,2,3,4,5]);
NwtRandomizer.fromAlphabet(10);
NwtRandomizer.fromAlphabet(10, "abcdef".split(""));
```

# Nwt Environment API

API para poder discriminar entre diferentes entornos del JavaScript.

## Exposición

Se expone a través de:

```js
NwtEnvironment
NwtFramework.Environment
Vue.prototype.$nwt.Environment
```

## Ventajas

Puedes hacer cosas como:

```js
NwtEnvironment.summary() // Object con todas las propiedades
NwtEnvironment.isDesktop // Boolean
NwtEnvironment.isBrowser // Boolean
NwtEnvironment.isMobile // Boolean
NwtEnvironment.isLinux // Boolean
NwtEnvironment.isWindows // Boolean
NwtEnvironment.isMac // Boolean
NwtEnvironment.isAndroid // Boolean
NwtEnvironment.isIOS // Boolean
NwtEnvironment.isElectron // Boolean
NwtEnvironment.isNode // Boolean
NwtEnvironment.isCordova // Boolean
NwtEnvironment.isCapacitor // Boolean
NwtEnvironment.isNWJS // Boolean
NwtEnvironment.isTouchDevice // Boolean
NwtEnvironment.isHeadless // Boolean
NwtEnvironment.canUseLocalStorage // Boolean
NwtEnvironment.canUseFilesystem // Boolean
NwtEnvironment.hasWindow // Boolean
NwtEnvironment.hasDOM // Boolean
NwtEnvironment.hasGlobal // Boolean
NwtEnvironment.hasRequire // Boolean
```

# Nwt Json Storer API

La `Nwt Json Storer API` consiste en la gestión de 1 JSON para PC con **filesystem** y para navegador con **localStorage**.

## Exposición

La API se expone en forma de clase con:

```js
NwtJsonStorer
NwtFramework.JsonStorer
Vue.prototype.$nwt.JsonStorer
```

## Ventajas

```js
NwtJsonStorer.isNode // Boolean
NwtJsonStorer.fs // Object | null
const storer = NwtJsonStorer.create({
  file: "/path/to/your/file.json",
  storageId: "JSON_STORER_FOR_YOUR_APP_IN_LS",
});
await storer.initialize(key, value);
await storer.save();
await storer.load();
await storer.get(key, defaultValue);
await storer.set(key, value);
await storer.delete(key);
```

# Nwt Settings API

API para gestionar configuraciones globalmente.

## Exposición

La API se expone a través de:

```js
NwtSettings
NwtFramework.Settings
Vue.prototype.$nwt.Settings
NwtSettings.global // instancia
```

## Ventajas

- Guarda en el fichero indicado la caché del programa dependiendo del sistema operativo.
- Carga las configuraciones desde el fichero dependiendo del sistema operativo.
- Si está en navegador, usa localStorage

```js
NwtSettings.global // instancia
// PROPIEDADES:
NwtSettings.global.$file
NwtSettings.global.$storageId
// PERSISTENCIA:
NwtSettings.global.save()
NwtSettings.global.load()
// CRUD:
NwtSettings.global.initialize(key, value)
NwtSettings.global.get(key, defaultValue)
NwtSettings.global.set(key, value)
NwtSettings.global.delete(key)
```

# Nwt Tester API

API para ejecutar tests asíncronos encadenados.

## Exposición

Se expone a través de:

```js
// Clase:
NwtTester
NwtFramework.Tester
Vue.prototype.$nwt.tester

// Instancia global:
NwtTester.global // instancia
Vue.prototype.$tester // instancia
Vue.prototype.$tester === NwtTester.global // instancia
```

## Ventajas

La API permite:

- encadenar un test dentro de otro con `test.define` y `test.run`
- definir un test para ejecutar luego con `test.define`
- ejecutar un test con `test.run`
- hacer una aserción con `assertion`
- enlazarlo con un widget gráfico automático con `<nwt-tester-viewer :tester="tester" />`

## API

La API se acaba exponiendo por:

```js
tester.define("Test ID", (subtest, assertion) => {
  subtest.define("Test ID", (subtest, assertion) => {
    assertion(true, "Assertion message");
    assertion(true, "Assertion message");
    assertion(true, "Assertion message");
  });
});
await tester.run("Test ID", (subtest, assertion) => {
  subtest.define("Test ID", (subtest, assertion) => {
    assertion(false, "Assertion message"); // No lanza un error
    assertion(true, "Assertion message");
    assertion(true, "Assertion message");
  });
});
```

Así que son:

- `tester.define(name:String, callback:AsyncFunction)`
   - para definir tests tardíos
   - útil para dejar la traza de lo que se va a hacer desde el principio
   - donde el callback recibe:
      - `subtest:NwtTester`: subtest del que pueden colgar sus propios hijos
      - `assertion:Function`: método para añadir aserciones al test
- `tester.run(name:String, callback:AsyncFunction)`
   - para correr tests inmediatos
   - útil en instancias ya iniciadas, tests dinámicos y predecir mejor el comportamiento
   - donde el callback recibe lo mismo que `tester.define`
- `assertion(condition:Boolean, message:String)`


## Test de ejemplo

El test de ejemplo es este:

```js
NwtTester.global.define("1 - Test", async test => {
  await NwtTimer.timeout(1000);
  await test.run("1.0 - Test inicial", async (test, assertion) => {
    assertion(true, "Test suite is working");
    assertion(true, "Test suite is working");
    assertion(true, "Test suite is working");
    assertion(true, "Test suite is working");
    assertion(true, "Test suite is working");
    assertion(true, "Test suite is working");
    await NwtTimer.timeout(1000);
    await test.run("1.0.1 - Test inicial 1", async (test, assertion) => {
      assertion(true, "Test suite is working 0/5");
      assertion(true, "Test suite is working 1/5");
      assertion(true, "Test suite is working 2/5");
      assertion(true, "Test suite is working 3/5");
      assertion(true, "Test suite is working 4/5");
      assertion(true, "Test suite is working 5/5");
    });
    await NwtTimer.timeout(1000);
    await test.run("1.0.2 - Test inicial 2", async (test, assertion) => {
      assertion(true, "Test suite is working 2/5");
      assertion(true, "Test suite is working 2/5");
      assertion(true, "Test suite is working 2/5");
      assertion(true, "Test suite is working 2/5");
    });
    await NwtTimer.timeout(1000);
    await test.run("1.0.3 - Test inicial 3", async (test, assertion) => {
      assertion(true, "Test suite is working 3/5");
    });
    await NwtTimer.timeout(1000);
    await test.run("1.0.4 - Test inicial 4", async (test, assertion) => {
      assertion(true, "Test suite is working 4/5");
    });
    await NwtTimer.timeout(1000);
    await test.run("1.0.5 - Test inicial 5", async (test, assertion) => {
      assertion(true, "Test suite is working 5/5");
    });
  });
  test.define("1.1 - Test de globales", async (test, assertion) => {
    await NwtTimer.timeout(1000);
    test.define("1.1.1 - Global NwtFramework", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.1.2 - Global NwtAsserter", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.1.3 - Global NwtTester", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
    });
  });
  test.define("1.2 - Test de globales 2", async (test, assertion) => {
    await NwtTimer.timeout(1000);
    test.define("1.2.1 - Global NwtFramework", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.2.2 - Global NwtAsserter", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.2.3 - Global NwtTester", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
    });
  });
  test.define("1.3 - Test de globales 3", async (test, assertion) => {
    await NwtTimer.timeout(1000);
    test.define("1.3.1 - Global NwtFramework", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.3.2 - Global NwtAsserter", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.3.3 - Global NwtTester", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
    });
  });
  test.define("1.4 - Test de globales 4", async (test, assertion) => {
    await NwtTimer.timeout(1000);
    test.define("1.4.1 - Global NwtFramework", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.4.2 - Global NwtAsserter", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
    });
    await NwtTimer.timeout(1000);
    test.define("1.4.3 - Global NwtTester", async () => {
      await NwtTimer.timeout(1000);
      assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
    });
  });
});
```

# Nwt Process API

Permite representar procesos.

Un proceso puede:

 - Guardar hijos con `$children`
 - Vincularse con un padre con `$parent`
 - Vincularse con un `ProcessManager` con `$manager`
 - Recordar cuándo se creó con `$createdAt`
 - Recordar cuándo se cerró con `$closedAt`
 - Ocultarse con `hide()`
 - Mostrarse con `show()`
 - Crear un subproceso con `createSubprocess(...)`
 - Cerrarse con `close()`

## Exposición

Se expone a través de:

```js
NwtProcess
NwtFramework.Process
Vue.prototype.$nwt.Process
```

## Permite cosas como

```js
const pr = NwtProcess.create({
  manager: NwtProcessManager.dialogs,
  parent: NwtProcessManager.dialogs.$list[0],
});
const pr2 = pr.createSubprocess({
  extraParams: {},
});
pr.hide();
pr.show();
pr.close();
```

# NwtProcessManager

API para la gestión de procesos internos de la aplicación.

## Exposición

```js
NwtProcessManager
NwtFramework.ProcessManager
Vue.prototype.$nwt.ProcessManager
NwtProcessManager.dialogs // instancia
NwtProcessManager.boxes // instancia
```

## Ventajas

Esta API permite crear subprocesos dependientes de procesos padre, y todos gestionados por 1 mismo `ProcessManager`.

```js
const dialogProcess = NwtProcessManager.dialogs.createProcess();
const dialogSubprocess1 = dialogProcess.createSubprocess();
const dialogSubprocess2 = dialogProcess.createSubprocess();
const dialogSubprocess3 = dialogProcess.createSubprocess();
```

# Nwt Process Manager Viewer API / Componente Vue2

La Nwt Process Manager Viewer API permite sincronizar un widget gráfico con una instancia de `NwtProcessManager`.

## Exposición

La API se expone a través del componente Vue2:

```js
Vue.options.components.NwtProcessManagerViewer
```

## Ventajas

La API permite cosas como:

```html
<nwt-process-manager-viewer :process-manager="processManager" />
```

Donde `processManager` tiene que ser una instancia de `NwtProcessManager`.

Hay 2 gestores de procesos principales:

```js
NwtProcessManager.dialogs instanceof NwtProcessManager
NwtProcessManager.boxes instanceof NwtProcessManager
```

# Nwt Dialog Definition API

API de uso interno.

Permite crear definiciones abstractas de diálogos.

Sirve para vincular:

 - `$original`: Definición de usuario de diálogo
 - `$factory`: Definición validada de diálogo
 - `$process`: Proceso representativo del diaĺogo


## Exposición

Se expone a través de:

```js
NwtDialogDefinition
NwtFramework.DialogDefinition
Vue.prototype.$nwt.DialogDefinition
```

## Ventajas

Permite crear definiciones de diálogo validadas:

```js
const dialogDefinition = NwtDialogDefinition.create({
  title: "Título del diálogo",
  template: `
    <div>
      <div>En el body del diálogo</div>
    </div>
  `,
  factory: {
    data: {},
    methods: {},
    watch: {},
    created: {},
    mounted: {},
    ...
  }
});
```

Esto nos permite luego acceder a:

```js
dialogDefinition.$original; // Parámetros originales
dialogDefinition.$factory; // Parámetros finales
dialogDefinition.$process; // Proceso vinculado al diálogo
await CommonDialogs.open(dialogDefinition.$factory);
```

# Nwt Tester Viewer API / Componente Vue2

La Nwt Tester Viewer API permite sincronizar un widget gráfico con una instancia de `NwtTester`.

## Exposición

La API se expone a través del componente Vue2:

```js
Vue.options.components.NwtTesterViewer
```

## Ventajas

La API permite cosas como:

```html
<nwt-tester-viewer :tester="tester" title="Título de esta suite de tests" />
```

Donde `tester` tiene que ser algo como:

```js
const tester = NwtTester.global;
// o por ejemplo:
const tester = new NwtTester("Nombre del tester", async (subtest, assertion) => {
  assertion(true, "Aserción 1");
  assertion(true, "Aserción 2");
  assertion(true, "Aserción 3");
  subtest.run("Subtest 1.1", async (subtest, assertion) => {
    assertion(true, "Aserción 1");
    assertion(true, "Aserción 2");
    assertion(true, "Aserción 3");
  });
});
```

# Nwt Timer API

API para hacer gestiones relacionadas con el tiempo.

## Exposición

La API se expone a través de:

```js
NwtTimer
NwtFramework.Timer
Vue.prototype.$nwt.Timer
```

## Ventajas

Permite algunas cosas como:

```js
NwtTimer.fromDateToString(new Date())
NwtTimer.fromMillisecondsToSeconds(5500)
NwtTimer.secondsDiff(oneDate, anotherDate)
await NwtTimer.timeout(5000)
```

# Nwt Utils API

API global de utilidades residuales.

## Exposición

La API se expone a través de:

```js
NwtUtils
NwtFramework.Utils
Vue.prototype.$nwt.Utils
```

## Ventajas

Permite hacer algunas cosas como:

```js
NwtUtils.jsonify({circular JSON is accepted too});
NwtUtils.noop();
```

# Nwt Lazy Loader API

API para carga cacheable de recursos JS y CSS.

## Exposición

La API se expone a través de:

```js
NwtLazyLoader
NwtFramework.LazyLoader
Vue.prototype.$nwt.LazyLoader
```

## Ventajas

La API permite algunas cosas como:

```js
await NwtLazyLoader.lazyLoad({
  id: "jquery",
  type: "scriptSrc",
  url: "https://cdn.js/jquery.js",
  checker: typeof jQuery !== "undefined",
});
await NwtLazyLoader.lazyLoad({
  id: "styles",
  type: "linkStylesheet",
  url: "https://cdn.js/styles.css",
});
```

# Nwt Framework API

API de acceso global.

## Exposición

Está expuesta en:

```js
NwtFramework
Vue.prototype.$nwt
```
## Ventajas

Dejar accesible desde 1 objeto todas las APIs de Nwt.

Se conforma a partir de:

```js
Object.assign(NwtFramework, {
  // BOOT
  Asserter: NwtAsserter,
  Globalizer: NwtGlobalizer,
  Importer: NwtImporter,
  LazyLoader: NwtLazyLoader,
  ProcessManager: NwtProcessManager,
  Process: NwtProcess,
  ProgressBar: NwtProgressBar,
  Randomizer: NwtRandomizer,
  Settings: NwtSettings,
  Tester: NwtTester,
  Timer: NwtTimer,
  Utils: NwtUtils,
  Tracer: NwtTracer,
  // Injected later:
  Errors: null,
  Dialogs: null,
  Toasts: null,
  // PACK
});
```

# Nwt Progress Bar API

API para gestionar una barra de progreso.

## Exposición

La API se expone a través de:

```js
NwtProgressBar
NwtFramework.ProgressBar
Vue.prototype.$nwt.ProgressBar
```

## Ventajas

Permite algunas cosas como:

```js
const progressBar = ProgressBar.create();
const subprogressBar = progressBar.subprogress({
  total: 5,
  current: 0,
});
subprogressBar.advance(1);
subprogressBar.advance(1);
subprogressBar.advance(1);
subprogressBar.advance(1);
subprogressBar.advance(1);
progressBar.advance(1);
```

# Nwt Progress Bar Viewer API / Componente Vue2

La Nwt Progress Bar Viewer API permite sincronizar un widget gráfico con una instancia de `NwtProgressBar`.

## Exposición

La API se expone a través del componente Vue2:

```js
Vue.options.components.NwtProgressBarViewer
```

## Ventajas

La API permite cosas como:

```html
<nwt-progress-bar-viewer :progress-bar="progressBar" />
```

Donde `progressBar` tiene que ser una instancia de `NwtProgressBar`.

# Nwt V-Draggable Directive - Vue directive

Directiva para `vue2` con la que convertir a un elemento en arrastrable de manera global (position: fixed).

## Exposición

Se expone vía la directiva:

```html
<div v-draggable />
```

# Nwt V-Resizable Directive - Vue directive

Directiva para `vue2` con la que convertir a un elemento en auto-redimensionable.

## Exposición

Se expone vía la directiva:

```html
<div v-resizable />
```

# Nwt Common Injections API

API para inyecciones globales. Se inyecta 1 componente global, `<common-injections />`.

## Exposición

Esta API no se expone, solo se inyecta en el DOM.

Pero se hace a través del componente vue2 `CommonInjections`.

## Ventajas

- Función 1 / `injectTouchability`
   - Hace que los eventos de touch (móvil) funcionen también como eventos click (PC) sin tener que cambiar el código.
   - Esto se consigue con una inyección de eventos del DOM a `document` en el paso del mounted.

# Nwt Injection API

La `Nwt Injection API` consiste en la inyección al DOM.

En este paso:

- Se espera al evento `load` de la `window`
- Se inyectan las APIs en `Vue.prototype`
   - `Vue.prototype.$window`
   - `Vue.prototype.$nwt`
   - `Vue.prototype.$tracer`
   - `Vue.prototype.$trace`
- Se inicia la aplicación basándose en el componente:
   - `Vue.options.components.MainWindow`

Pero no se expone una API como tal en este punto.

