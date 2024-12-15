export type RlpItem = Uint8Array | ReadonlyArray<RlpItem>;
export declare function rlpEncode(item: RlpItem): Uint8Array;
export declare function rlpDecode(data: Uint8Array): RlpItem;
