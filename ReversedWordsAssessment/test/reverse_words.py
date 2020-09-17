import glob
import os


def reverse_largest_word(path):
    """
    Read from files on a directory and return the largest word as it is and reversed
    :return: the largest word from files inside a directory and the reversed largest work
    """
    largest_word = ''
    largest_word_reversed = ''
    list_invalid_files = []

    # Reading .txt files from a directory
    for filename in glob.glob(os.path.join(path, '*')):
        filename_split = filename.split('.')

        if filename_split[len(filename_split)-1] != 'txt':
            list_invalid_files.append(filename)
        else:
            # Open current file
            with open(filename, encoding="ascii", errors="surrogateescape") as file:
                # print('\t Reading from file ' + filename)**********************************************
                # Get all lines from file
                data = file.readlines()

                # Loop through lines
                for line in data:

                    # Get line as a list
                    words = line.split()

                    # If line is not empty
                    if len(words) > 0:
                        # If current word is larger than latest largest word
                        if len(words[0]) >= len(largest_word):

                            # Replace variable with current largest word
                            largest_word = words[0]
                            # Save largest word as reversed
                            largest_word_reversed = words[0][::-1]

    if len(list_invalid_files) != 0:
        print('\t WARNING - Only Text files are allowed, next were found inside the directory')
        for invalid_files in list_invalid_files:
            print('\t\t' + invalid_files)

    # Return largest word and reversed largest word
    return [largest_word, largest_word_reversed]
