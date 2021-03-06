declare module 'phaser3-rex-plugins/plugins/board/board/Board' {
    export default class Board extends EE {
        constructor(scene: any, config: any);
        scene: any;
        boardData: BoardData;
        resetFromJSON(o: any): Board;
        isBoard: any;
        boot(): void;
        shutdown(): Board;
        destroy(): Board;
        setGrid(grid: any): Board;
        grid: any;
        setWrapMode(mode: any): Board;
        wrapMode: any;
        setInfinityMode(mode: any): Board;
        infinityMode: any;
        setBoardSize(width: any, height: any): Board;
        exists(gameObject: any): boolean;
        get chessCount(): number | undefined;
        clear(destroy: any): Board;
        on(
            event: string | symbol,
            fn: import('phaser3-rex-plugins/node_modules/eventemitter3').ListenerFn,
            context?: any,
        ): Board;
        addListener(
            event: string | symbol,
            fn: import('phaser3-rex-plugins/node_modules/eventemitter3').ListenerFn,
            context?: any,
        ): Board;
        once(
            event: string | symbol,
            fn: import('phaser3-rex-plugins/node_modules/eventemitter3').ListenerFn,
            context?: any,
        ): Board;
        removeListener(
            event: string | symbol,
            fn?: import('phaser3-rex-plugins/node_modules/eventemitter3').ListenerFn | undefined,
            context?: any,
            once?: boolean | undefined,
        ): Board;
        off(
            event: string | symbol,
            fn?: import('phaser3-rex-plugins/node_modules/eventemitter3').ListenerFn | undefined,
            context?: any,
            once?: boolean | undefined,
        ): Board;
        removeAllListeners(event?: string | symbol | undefined): Board;

        getChessData(gameObject: any): any;
        getChessUID(gameObject: any): any;
        setBoardWidth(width: number): Board;
        setBoardHeight(height: number): Board;
        tileXYZToKey(tileX: any, tileY: any, tileZ: any, separator: any): string;
        TileXYToKey(tileX: any, tileY: any, separator: any): string;
        keyToTileXYZ(key: any, out: any, separator: any): any;
        tileXYToWorldX(tileX: any, tileY: any): any;
        tileXYToWorldY(tileX: any, tileY: any): any;
        tileXYToWorldXY(tileX: any, tileY: any, out: any): any;
        tileXYArrayToWorldXYArray(tileXYArray: any, out: any): any;
        worldXYToTileX(worldX: any, worldY: any): any;
        worldXYToTileY(worldX: any, worldY: any): any;
        worldXYToTileXY(worldX: any, worldY: any, out: any): any;
        worldXYToChessArray(worldX: any, worldY: any, out: any): any;
        worldXYToChess(worldX: any, worldY: any, tileZ: any): any;
        worldXYSnapToGrid(worldX: any, worldY: any, out: any): any;
        angleBetween(tileA: any, tileB: any): number;
        isAngleInCone(chessA: any, chessB: any, face: any, cone: any): boolean;
        angleToward(tileXY: any, direction: any): any;
        angleSnapToDirection(tileXY: any, angle: any): number | undefined;
        isOverlappingPoint(worldX: any, worldY: any, tileZ: any): any;
        gridAlign(gameObject: any, tileX: any, tileY: any): any;
        lineToTileXYArray(startX: any, startY: any, endX: any, endY: any, out: any): any;
        circleToTileXYArray(circle: any, out: any): any;
        ellipseToTileXYArray(ellipse: any, out: any): any;
        polygonToTileXYArray(polygon: any, out: any): any;
        rectangleToTileXYArray(rectangle: any, out: any): any;
        triangleToTileXYArray(triangle: any, out: any): any;
        shapeToTileXYArray(shape: any, containsCallback: any, out: any): any;
        uidToChess(uid: any): any;
        addChess(gameObject: any, tileX: any, tileY: any, tileZ: any, align: any): any;
        removeChess(gameObject: any, tileX: any, tileY: any, tileZ: any, destroy: any, fromBoardRemove: any): any;
        removeAllChess(destroy: any, fromBoardRemove: any): any;
        swapChess(gameObjectA: any, gameObjectB: any, align: any): any;
        moveChess(gameObject: any, tileX: any, tileY: any, tileZ: any, align: any): any;
        getAllChess(out: any): any;
        contains(tileX: any, tileY: any, tileZ: any): any;
        forEachTileXY(callback: any, scope: any, order?: any): any;
        getWrapTileXY(tileX: any, tileY: any, out: any): any;
        tileXYZToChess(tileX: any, tileY: any, tileZ: any): any;
        tileXYToChessArray(tileX: any, tileY: any, out: any): any;
        tileZToChessArray(tileZ: any, out: any): any;
        tileXYArrayToChessArray(tileXYArray: any, tileZ: any, out: any): any;
        chessToTileXYZ(chess: any): any;
        offset(tileXY: any, OffsetTileX: any, OffsetTileY: any, out: any): any;
        mirror(tileXY: any, mode: any, originTileXY: any, out: any): any;
        rotate(tileXY: any, direction: any, originTileXY: any, out: any): any;
        getOppositeDirection(tileX: any, tileY: any, direction: any): any;
        getDistance(tileA: any, tileB: any, roughMode: any): any;
        directionBetween(chessA: any, chessB: any, round: any): any;
        isDirectionInCone(chessA: any, chessB: any, face: any, cone: any): boolean;
        fit(tileXYArray: any): any;
        getEmptyTileXYArray(tileZ: any, out: any): any;
        getRandomEmptyTileXY(tileZ: any, out: any): any;
        getTileXYAtDirection(chess: any, directions: any, distance: any, out: any): any;
        getNeighborTileXY(srcTileXY: any, directions: any, out: any): any;
        getNeighborTileXYAtAngle(srcTileXY: any, angle: any, out: any): any;
        getNeighborChess(chess: any, directions: any, neighborTileZ: any, out: any): any;
        getNeighborTileDirection(srcTileXY: any, neighborTileXY: any): any;
        getNeighborChessDirection(chess: any, neighborChess: any): any;
        areNeighbors(chessA: any, chessB: any): boolean;
        ringToTileXYArray(centerTileXY: any, radius: any, out: any): any;
        filledRingToTileXYArray(centerTileXY: any, radius: any, nearToFar: any, out: any): any;
        hasBlocker(tileX: any, tileY: any, tileZ: any): boolean;
        hasEdgeBlocker(tileX: any, tileY: any, tileZ: any, direction: any): any;
        getGridPoints(tileX: any, tileY: any, points: any): any;
        setInteractive(enable?: boolean): Board;
    }

    import EE from 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitter';
    import BoardData from 'phaser3-rex-plugins/plugins/board/board/boarddata/BoardData';
}
