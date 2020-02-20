import Animated from "react-native-reanimated";
export declare const getIsAfterActive: (p1: Animated.Node<number>, p2: Animated.Node<number>) => Animated.Node<number>;
export declare const getCellStart: (p1: Animated.Node<number>, p2: Animated.Node<number>, p3: Animated.Node<number>, p4: Animated.Node<number>) => Animated.Node<number>;
export declare const getOnChangeTranslate: (p1: Animated.Node<number>, p2: Animated.Node<number>, p3: Animated.Value<number>, p4: Animated.Value<number>, p5: Animated.Node<number>) => Animated.Node<number>;
export declare const hardReset: (p1: Animated.Value<number>, p2: Animated.Value<number>, p3: Animated.Value<number>, p4: Animated.Value<number>) => Animated.Node<number>;
export declare const setupCell: (...params: Animated.Adaptable<number>[]) => Animated.Node<number>;
export declare function springFill(clock: Animated.Clock, state: Animated.SpringState, config: Animated.SpringConfig): any;
