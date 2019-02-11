import java.util.Stack;

public class GenericStack {

    public static void main(String[] args) {

        Integer[] integerArray = new Integer[]{435, 34, 13, 678};
        Double[] doubleArray = new Double[]{13.5, 7.34, 345.13, 0.67};
        Character[] characterArray = new Character[]{'s', 'a', 'n', 'j', 'a', 'y'};

        Stack integerStack = null;
        Stack doubleStack = null;
        Stack stringStack = null;

        integerStack = stackPush(integerArray);
        doubleStack = stackPush(doubleArray);
        stringStack = stackPush(characterArray);

        integerStack = stackPop(integerStack);
        doubleStack = stackPop(doubleStack);
        stringStack = stackPop(stringStack);

    }

    public static <T> Stack stackPush(T[] array) {

        Stack stack = new Stack();

        for( T element : array) {
            stack.push(element);
        }
        return stack;
    }


    public static Stack stackPop(Stack stack) {
        stack.pop();
        return stack;
    }
}
