import configparser

Config = configparser.ConfigParser()
Config.read(".env")
print(Config.sections())


def config_section_map(section):
    dictionary = {}
    options = Config.options(section)
    for option in options:
        try:
            dictionary[option] = Config.get(section, option)
            if dictionary[option] == -1:
                print("skip: %s" % option)
        except:
            print("exception on %s!" % option)
            dictionary[option] = None
    return dictionary
