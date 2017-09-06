# UserAttentionUserStudy

- More information, please feel free to visit my personal website [here](https://hanhonglei.github.io/).

- The execute application can be downloaded from [here](http://pan.baidu.com/s/1dEO1pWt).

User Study of the Paper [Implicit measures of user attention in virtual environment navigation](https://hanhonglei.github.io/publications/)

`Abstract`: The eye-tracker device is the main tool to obtain visual attention. However, it is hard to be applied in the 3D virtual scene navigatipron because of its poor reliability, great complexity and high price. We propose a new attention measure metric which can be easily embedded in the virtual environment. Behaviors of virtual camera controlled by the user are regarded as implicit expression of visual attention. The implicit expression is parameterized by the observed object’s distance to the center of the camera, occlusion, projected area, and observation time. A sophisticated user study experiment is designed to verify the reliability of this kind of measurement. The proposed implicit measurement of user attention can be effectively applied to an application of user attention aided game design.

This is the user study `Unity 3D` application of [this paper](http://info.scichina.com:8084/sciF/CN/Y2014/V44/I11/1398).

During user navigating, all attention evaluation parameters, proposed in this paper, of different saliency game object will be recorded in different files located in folder `Output`. The player navigate behavior will be recorded as well.

After collect enough samples, a user attention measure result of different saliency level game object will be obtained. The attention value can be calculated based on these parameters using the method proposed in the [paper](http://info.scichina.com:8084/sciF/CN/Y2014/V44/I11/1398).

Be ware, as there are quite a few models, the size of this repository is around 1.5G.

## Important

You should first create a folder in the root folder, and name it as `Output`. All game data files will be saved in this subfolder, but is not updated by Github.

----

- This project is under [GNU GENERAL PUBLIC LICENSE](https://www.gnu.org/licenses/), please check it in the root folder.