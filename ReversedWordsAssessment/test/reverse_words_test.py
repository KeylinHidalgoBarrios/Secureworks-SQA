import reverse_words
import unittest


class TestReverseWord(unittest.TestCase):

    def test_revers_five_files(self):
        self.assertEqual(reverse_words.reverse_largest_word("./data/five_files"), ['thisIsAHugeWordFileThree', 'eerhTeliFdroWeguHAsIsiht'])

    def test_reverse_one(self):
        self.assertEqual(reverse_words.reverse_largest_word("./data/one_file"), ['thisIsAHugeWordOneFile', 'eliFenOdroWeguHAsIsiht'])

    def test_reverse_two_empty_files(self):
        self.assertEqual(reverse_words.reverse_largest_word("./data/two_empty_files"), ['', ''])

    def test_reverse_two_files_one_empty(self):
        self.assertEqual(reverse_words.reverse_largest_word("./data/two_files_one_empty"), ['thisIsAHugeWordTwoFilesOneEmpty', 'ytpmEenOseliFowTdroWeguHAsIsiht'])

    def test_reverse_two_files(self):
        self.assertEqual(reverse_words.reverse_largest_word("./data/two_files_with_data"), ['ddsdsotorrinolaringologiadfsfsfsdfsdfsd', 'dsfdsfdsfsfsfdaigologniralonirrotosdsdd'])

    def test_reverse_invalid_extension_files(self):
        self.assertEqual(reverse_words.reverse_largest_word("./data/invalid_files"), ['thisIsAHugeWordOneFile', 'eliFenOdroWeguHAsIsiht'])


if __name__ == '__main__':
    unittest.main(verbosity=2)
