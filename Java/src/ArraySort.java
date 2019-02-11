public class ArraySort {

    public static void main(String[] args) {

        Integer[] arrayToSort = {90, 54, 234, 34, 12, 98, 23};

        bubbleSort(arrayToSort);

        for(int i=0; i<arrayToSort.length; i++) {
            System.out.println(arrayToSort[i]);
        }

    }

    public static void bubbleSort(Integer[] arrayToSort) {
        int n = arrayToSort.length;
        int temp = 0;

        for (int i = 0; i < n; i++) {

            for (int j = 1; j < (n - i); j++) {

                if (arrayToSort[j - 1] > arrayToSort[j]) {
                    temp = arrayToSort[j - 1];
                    arrayToSort[j - 1] = arrayToSort[j];
                    arrayToSort[j] = temp;
                }
            }
        }
    }

}
