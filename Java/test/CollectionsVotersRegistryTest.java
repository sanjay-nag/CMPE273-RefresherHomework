import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

class CollectionsVotersRegistryTest {

    @Test
    void testLegitVoters() {

        CollectionsVotersRegistry collectionsVotersRegistry = new CollectionsVotersRegistry();

        //Expected set
        Set expectedLegitVoters = new HashSet();
        expectedLegitVoters.add("Sanjay");
        expectedLegitVoters.add("Vishnu");
        expectedLegitVoters.add("Abhay");
        expectedLegitVoters.add("Aniruddha");
        expectedLegitVoters.add("Gurudutt");
        expectedLegitVoters.add("Shravanth");
        expectedLegitVoters.add("Venkatraman");

        //Input string
        String[] voters = {"Sanjay", "Vishnu", "Abhay", "Aniruddha", "Gurudutt", "Shravanth", "Venkatraman"};

        Assertions.assertEquals(expectedLegitVoters, collectionsVotersRegistry.legitVoters(voters));
    }
}