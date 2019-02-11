
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Stack;

class GenericStackTest {

    @Test
    void testStackPushInteger() {

        GenericStack genericStack = new GenericStack();

        Integer[] integerArray = new Integer[]{435, 34, 13, 678};

        Stack expectedIntegerStack = new Stack();
        expectedIntegerStack.push(435);
        expectedIntegerStack.push(34);
        expectedIntegerStack.push(13);
        expectedIntegerStack.push(678);


        Stack integerStack = null;
        integerStack = genericStack.stackPush(integerArray);

        Assertions.assertEquals(expectedIntegerStack.size(), integerStack.size());
    }

    @Test
    void testStackPopInteger() {

        GenericStack genericStack = new GenericStack();

        Stack expectedIntegerStack = new Stack();
        expectedIntegerStack.push(435);
        expectedIntegerStack.push(34);
        expectedIntegerStack.push(13);
        expectedIntegerStack.push(678);

        Stack actualIntegerStack = genericStack.stackPop(expectedIntegerStack);

        Assertions.assertEquals(expectedIntegerStack.size(), actualIntegerStack.size());
    }


    @Test
    void testStackPushDouble() {

        GenericStack genericStack = new GenericStack();

        Double[] doubleArray = new Double[]{435.34, 34.89, 13.01, 678.00};

        Stack expectedDoubleStack = new Stack();
        expectedDoubleStack.push(435.34);
        expectedDoubleStack.push(34.89);
        expectedDoubleStack.push(13.01);
        expectedDoubleStack.push(678.00);


        Stack doubleStack = null;
        doubleStack = genericStack.stackPush(doubleArray);

        Assertions.assertEquals(expectedDoubleStack.size(), doubleStack.size());
    }

    @Test
    void testStackPopDouble() {

        GenericStack genericStack = new GenericStack();

        Stack expectedDoubleStack = new Stack();
        expectedDoubleStack.push(435.34);
        expectedDoubleStack.push(34.89);
        expectedDoubleStack.push(13.01);
        expectedDoubleStack.push(678.00);

        Stack actualDoubleStack = genericStack.stackPop(expectedDoubleStack);

        Assertions.assertEquals(expectedDoubleStack.size(), actualDoubleStack.size());
    }


    @Test
    void testStackPushCharacter() {

        GenericStack genericStack = new GenericStack();

        Character[] characterArray = new Character[]{'s', 'a', 'n', 'j', 'a', 'y'};

        Stack expectedCharacterStack = new Stack();
        expectedCharacterStack.push('s');
        expectedCharacterStack.push('a');
        expectedCharacterStack.push('n');
        expectedCharacterStack.push('j');
        expectedCharacterStack.push('a');
        expectedCharacterStack.push('y');


        Stack characterStack = null;
        characterStack = genericStack.stackPush(characterArray);

        Assertions.assertEquals(expectedCharacterStack.size(), characterStack.size());
    }

    @Test
    void testStackPopCharacter() {

        GenericStack genericStack = new GenericStack();

        Stack expectedCharacterStack = new Stack();
        expectedCharacterStack.push('s');
        expectedCharacterStack.push('a');
        expectedCharacterStack.push('n');
        expectedCharacterStack.push('j');
        expectedCharacterStack.push('a');
        expectedCharacterStack.push('y');

        Stack actualDoubleStack = genericStack.stackPop(expectedCharacterStack);

        Assertions.assertEquals(expectedCharacterStack.size(), actualDoubleStack.size());
    }
}