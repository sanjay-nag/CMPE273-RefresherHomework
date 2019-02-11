import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ArraySortTest {

    @Test
    void bubbleSort() {
        ArraySort arraySort = new ArraySort();
        Integer[] arrayToSort = {34, 34, 332, 12, 98, 123};

        Integer[] expectedSortedArray = {12, 34, 34, 98, 123, 332};

        arraySort.bubbleSort(arrayToSort);

        Assertions.assertArrayEquals(expectedSortedArray, arrayToSort);

    }
}