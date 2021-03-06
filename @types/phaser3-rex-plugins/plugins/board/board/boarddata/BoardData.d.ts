declare module 'phaser3-rex-plugins/plugins/board/board/boarddata/BoardData' {
    export default class BoardData {
        shutdown(): BoardData;
        destroy(): BoardData;
        clear(): BoardData;
        clearBounds(): BoardData;
        addUID(uid: any, x: any, y: any, z: any): BoardData;
        getUID(x: any, y: any, z: any): any;
        removeUID(x: any, y: any, z: any): BoardData;
        exists(uid: any): boolean;
        contains(x: any, y: any, z: any): boolean;
        getXYZ(uid: any): any;

        xMax: any;
        xMin: any;
        yMax: any;
        yMin: any;
        chessCount: number | undefined;
        XYZToUID: {};
        UIDToXYZ: {};
    }
}
